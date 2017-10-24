import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('new');
  this.route('active');
  this.route('show');
  this.route('ask');
  this.route('jobs');
  this.route('frontpage');
});

export default Router;
