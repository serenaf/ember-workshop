import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  title: DS.attr('string'),
  points: DS.attr('number'),
  user: DS.attr('string'),
  time: DS.attr('unix-date'),
  timeAgo: DS.attr('string'),
  commentsCount: DS.attr('number'),
  type: DS.attr('string'),
  url: DS.attr('string'),
  domain: DS.attr('string'),
  comments: DS.hasMany('comment', { async: true }),

  isInternalLink: computed.empty('domain'),
  externalUrl: computed('domain', 'isInternalLink', function() {
    if (this.get('isInternalLink')) {
      return `https://news.ycombinator.com/item?id=${this.get('id')}`
    }
    return this.get('url');
  })
});
