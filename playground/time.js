var moment = require("moment");

// var date = moment();
// // date.add(100, 'year').subtract(9, 'months');
// // console.log(date);
// console.log(date.format('hh:mm a'));
// console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

 var createdAt = 1234;
 var date = moment(createdAt);
 console.log(date.format('hh:mm a'));
