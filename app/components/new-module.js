import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewModuleComponent extends Component {
    /**
    * Services
    */
    @service store;
    @service router;

    /**
    * Tracked Properties
    */
    @tracked newCode = '';
    @tracked newName = '';
    @tracked newSemester = 'WS18/19';
    @tracked errorCode = '';
    @tracked errorName = '';
    @tracked errorSemester = '';

    /**
    * Untracked Properties
    */
    classSpan = 'invalid-feedback';
    classLabel = 'text-danger';
    classInput = 'is-invalid';

    /**
    *
    * Handle submit action and create new module
    * Reset error messages
    * @param {*} event used to prevent default behavior
    */
    @action
    createModule(event) {
        event.preventDefault();
        let newModule = this.store.createRecord('module', {
            code: this.newCode,
            name: this.newName,
            semester: this.newSemester,
            teacher: this.args.model,
        });
        this.errorCode = '';
        this.errorName = '';
        this.errorSemester = '';
        newModule
            .save()
            .then((module) => {
                this.router.transitionTo('modules.view', module.id);
            })
            .catch((response) => {
                response.errors.forEach((error) => {
                if (error.source.pointer == '/data/attributes/code') {
                    this.errorCode = error.detail;
                } else if (error.source.pointer == '/data/attributes/name') {
                    this.errorName = error.detail;
                } else if (error.source.pointer == '/data/attributes/semester') {
                    this.errorSemester = error.detail;
                }
            });
        });
    }

    /**
    *
    * Sets value for semester on change
    * @param {String} value semester
    */
    @action
    setNewSemester(value) {
        this.newSemester = value;
    }
}
