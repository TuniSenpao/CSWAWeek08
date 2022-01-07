import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ModulesModulesListComponent extends Component {

  @action
  delete(module) {
    module.deleteRecord();
    module.save();
  }
}
