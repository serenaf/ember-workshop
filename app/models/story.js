import DS from 'ember-data';

/*
{
 "id": 15508507,
 "title": "MongoDB shares jump more than 30% in $192M IPO",
 "points": 182,
 "user": "bnewton",
 "time": 1508425419,
 "time_ago": "6 hours ago",
 "comments_count": 147,
 "type": "link",
 "url": "https://www.cnbc.com/2017/10/19/mongodb-mdb-ipo-stock-price-on-first-trading-day.html",
 "domain": "cnbc.com"
}
*/

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
