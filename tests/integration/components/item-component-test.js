import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { make, manualSetup } from 'ember-data-factory-guy';
import { click } from 'ember-native-dom-helpers';


moduleForComponent('item-component', 'Integration | Component | item component', {
  integration: true,
  beforeEach() {
    manualSetup(this.container);
  }
});

const TEMPLATE = hbs`{{item-component
                  item=item
                  markAsRead=(action markAsRead item.id)
                }}`

const SELECTORS = {
  itemDeleteButton: '.test__item-delete-button',
};

function renderComponent(component, options = {}) {
  component.setProperties({
    item: options.item,
    markAsRead: options.markAsRead || (() => {}),
  });
  component.render(TEMPLATE);
}

test('it marks an item as read', async function(assert) {
  assert.expect(1);
  let item = make('item');
  renderComponent(this, { item, markAsRead: () => assert.ok(true) });
  await click(SELECTORS.itemDeleteButton)
});
