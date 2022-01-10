import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RoomsNewComponent extends Component {
  @service store;
  @service router;

  @tracked newName = '';
  @tracked newAddress = '';
  @tracked newCapacity = '';
  @tracked newFeatures = '';

  @tracked errorName = '';
  @tracked errorAddress = '';
  @tracked errorCapacity = '';
  @tracked errorFeatures = '';

  @action
  createRoom(event) {
    event.preventDefault();
    let newRoom = this.store.createRecord('room', {
      name: this.newName,
      address: this.newAddress,
      capacity: this.newCapacity,
      features: this.newFeatures
    })
    this.newName = '';
    this.newAddress = '';
    this.newCapacity = '';
    this.newFeatures = '';
    this.errorName = '';
    this.errorAddress = '';
    this.errorCapacity = '';
    this.errorFeatures = '';
    newRoom.save().then((room) => {
      this.router.transitionTo('rooms.view', room.id)
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
}
