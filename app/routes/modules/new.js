import Route from '@ember/routing/route';

export default class ModulesNewRoute extends Route {
    model() {
        return this.store.findRecord('user', 1)
    }
}
