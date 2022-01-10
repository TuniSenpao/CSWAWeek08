import Route from '@ember/routing/route';

export default class RoomsEditRoute extends Route {
  model(params) {
    return this.store.findRecord('room', params.mid)
  }
}
