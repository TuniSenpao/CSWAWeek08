import EmberRouter from '@ember/routing/router';
import config from 'week08/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('modules', function() {
    this.route('view', {path: ':mid'});
    this.route('new');
    this.route('edit', {path: ':mid/edit'});
  });

  this.route('users', function() {
    this.route('register');
  });
});
