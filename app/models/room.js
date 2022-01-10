import Model, { attr } from '@ember-data/model';

export default class RoomModel extends Model {
  @attr name;
  @attr address;
  @attr capacity;
  @attr features;

  get actions() {
    return {
      delete: {
        icon: 'mdi mdi-delete warning',
        title: 'Delete',
        action: 'delete'
      }
    }
  }
}
