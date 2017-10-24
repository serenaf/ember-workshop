import DS from 'ember-data';

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
});
