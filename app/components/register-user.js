import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class UsersRegisterComponent extends Component {
    /**
     * services
     */
    @service store;
    @service router;
    /**
     * tracked properties
     */
    @tracked newEmail = '';
    @tracked newFirstName = '';
    @tracked newLastName = '';
    @tracked newRole = 'student';
    @tracked errorMail = '';
    @tracked errorFirstName = '';
    @tracked errorLastName = '';
    @tracked errorRole = '';
    /**
     * untracked properties
     */
    classLabel = 'text-danger';
    classInput = 'is-invalid';
    classSpan = 'invalid-feedback';

    /**
     * Resets all the error messages and stores a new
     * user that is saved to the store and transitions
     * to modules route.
     * Catches errors should they occur
     */
    @action
    createUser(event) {
        event.preventDefault();
        this.errorMail = '';
        this.errorFirstName = '';
        this.errorLastName = '';
        this.errorRole = '';
        let newUser = this.store.createRecord('user', {
            email: this.newEmail,
            first_name: this.newFirstName,
            last_name: this.newLastName,
            role: this.newRole
        });
        newUser.save().then((user) => {
            this.router.transitionTo('modules')
        }).catch((response) => {
            response.errors.forEach((error) => {
                if(error.source.pointer == '/data/attributes/email') {
                    this.errorMail = error.detail;
                } else if(error.source.pointer == '/data/attributes/first-name') {
                    this.errorFirstName = error.detail;
                } else if(error.source.pointer == '/data/attributes/last-name') {
                    this.errorLastName = error.detail;
                } else if(error.source.pointer == '/data/attributes/role') {
                    this.errorRole = error.detail;
                }
            })
        })
    }

    /**
     * Sets the new role if it changes
     */
    @action
    setNewRole(value) {
        this.newRole = value;
    }
}
