import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class EditModuleComponent extends Component {
  /**
  * Services
  */
  @service router;
  @service store;

  /**
  * Untracked Properties
  */
  classSpan = 'invalid-feedback';
  classInput = 'is-invalid';
  classLabel = 'text-danger';

  /**
  * Actions
  */

  /**
  *
  * Handle update of the module, reset error messages
  * @param {*} event prevent default behavior
  */
  @action
  updateModule(event) {
    event.preventDefault();
    this.errorCode = '';
    this.errorName = '';
    this.errorSemester = '';
    this.args.model
      .save()
      .then((model) => {
        this.router.transitionTo('modules.view', model.id);
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
  * Handle reset of module to previouse state
  * @param {*} event prevents default behavior
  */
  @action
  resetModule(event) {
    event.preventDefault();
    if (this.args.model.hasDirtyAttributes) {
      this.args.model.rollbackAttributes();
    }
    this.router.transitionTo('modules.view', this.args.model.id);
  }

  /**
  * Sets the semester to the param's value
  * @param {String} semester value of the semester
  */
  @action
  setSemester(semester) {
      this.args.model.semester = semester;
  }
}
