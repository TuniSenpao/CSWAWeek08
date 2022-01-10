import Route from '@ember/routing/route';

export default class ModulesIndexRoute extends Route {
  queryParams = {
    semester: {
      refreshModel: true
    }
  }

  model(params) {
        return this.store.query('module', params)
    }
  /**
  * Reset the controller when the route is changed.
  */
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('semester', undefined);
    }
  }
}
