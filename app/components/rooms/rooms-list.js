import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class RoomsRoomsListComponent extends Component {
  @action delete(room) {
    room.deleteRecord();
    room.save()
  }
}
