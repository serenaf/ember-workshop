import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({
  ajax: service(),
  model () {
    return this.get('store').query('item', {
      page: 1
    });
  }
});
