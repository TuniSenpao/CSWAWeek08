import Route from '@ember/routing/route';

export default class RoomsViewRoute extends Route {
  model(params) {
    return this.store.findRecord('room', params.mid)
  }
}
