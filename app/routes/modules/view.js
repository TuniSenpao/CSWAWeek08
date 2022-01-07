import Route from '@ember/routing/route';

export default class ModulesViewRoute extends Route{
    model(params) {
        return this.store.findRecord('module', params.mid)
    }
}
