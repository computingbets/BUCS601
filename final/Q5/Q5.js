'use strict';

var date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var date2 = new Date("12/31/2017");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
alert(diffDays);

module.export {
  diffDays,
}
