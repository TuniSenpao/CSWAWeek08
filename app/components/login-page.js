import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

/**
* Provides backend functionality for Login Page Component used by Login Route
*/

export default class LoginPageComponent extends Component {
    /**
    * Required variables
    * The router service is used to transition to the Modules Route when email
    * and password are correct.
    * The untracked variables help update the UI.
    */
    @service router;
    @tracked email = '';
    @tracked password = '';
    @tracked loginInvalid = false;
    classLabel = 'text-danger';
    classInput = 'is-invalid';
    classSpan = 'invalid-feedback';

    /**
    * Handles the user submitting the login form.
    * Suppresses standard behavior.
    * Tests email/password and updates the UI.
    */
    @action
    login(event) {
        event.preventDefault();
        console.log(this.email);
        console.log(this.password);
        if (this.email === 'test@example.com' && this.password === 'password') {
        this.loginInvalid = false;
        this.router.transitionTo('modules');
        } else {
        this.loginInvalid = true;
        }
    }

    /**
    * Handles the user typing in the email/password input fields.
    * Resets the ''loginInvalid'' property to improve usability.
    */
    @action
    typing() {
        this.loginInvalid = false;
    }
}
