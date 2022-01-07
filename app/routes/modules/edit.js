import Route from '@ember/routing/route';

export default class ModulesEditRoute extends Route {
    model(params) {
        return this.store.findRecord('module', params.mid)
    }
}
