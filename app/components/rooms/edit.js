import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class RoomsEditComponent extends Component {
  @service router;
  @service store;

  @action
  updateRoom(event) {
    event.preventDefault();
    this.errorName = '';
    this.errorAddress = '';
    this.errorCapacity = '';
    this.errorFeatures = '';
    this.args.model
    .save()
    .then((model) => {
      this.router.transitionTo('rooms.view', model.id)
    }).catch((response) => {
      response.errors.forEach((error) => {
        if (error.source.pointer == '/data/attributes/name') {
          this.errorName = error.detail;
        } else if (error.source.pointer == '/data/attributes/address') {
          this.errorAddress = error.detail;
        } else if (error.source.pointer == '/data/attributes/capacity') {
          this.errorCapacity = error.detail;
        } else if (error.source.pointer == '/data/attributes/features') {
          this.errorFeatures = error.detail;
        }
      })
    })
  }

  @action
  resetRoom(event) {
    event.preventDefault();
    if (this.args.model.hasDirtyAttributes) {
      this.args.model.rollbackAttributes();
    }
    this.router.transitionTo('rooms.view', this.args.model.id)
  }



}
