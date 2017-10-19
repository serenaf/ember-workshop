import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({
  ajax: service(),
  async model () {
    let response = await this.get('ajax').request('https://node-hnapi.herokuapp.com/news', {
      method: 'GET',
      data: {
        page: 1
      }
    });
    return response.map(story => this.get('store').createRecord('story', story));
  }
});
