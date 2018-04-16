import Component from '@ember/component';
import { computed } from '@ember/object';
import { A } from '@ember/array';

export default Component.extend({
  readItems: undefined,
  init() {
    this._super(...arguments);
    this.readItems = A();
  },
  filteredItems: computed('items.[]', 'readItems.[]', function() {
    return this.get('items').filter(item =>  !this.get('readItems').includes(item.get('id')));
  }),
  actions: {
    markAsRead(itemId) {
      this.get('readItems').pushObject(itemId)
    }
  }
});
