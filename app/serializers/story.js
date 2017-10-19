import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.JSONSerializer.extend({
  keyForAttribute: function(attr) {
    return underscore(attr);
  },
  keyForRelationship: function(rawKey) {
    return underscore(rawKey);
  },
});
