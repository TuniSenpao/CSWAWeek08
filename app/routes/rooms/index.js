import Route from '@ember/routing/route';

export default class RoomsIndexRoute extends Route {
  model(params) {
    return this.store.query('room', params)
  }
}
