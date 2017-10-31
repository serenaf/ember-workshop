import { moduleForModel, test } from 'ember-qunit';

moduleForModel('item', 'Unit | Model | item', {
  unit: true
});

test('it returns the correct external url', function(assert) {
  let model = this.subject({'domain': ''});
  assert.equal(model.get('externalUrl'), `https://news.ycombinator.com/item?id=${model.get('id')}`, 'it displays the correct external url');
});
