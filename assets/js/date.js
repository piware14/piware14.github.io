const date = new Date();
const currentDay = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
function yearssince(year) {
  var ageInMilliseconds = new Date() - new Date(year+"-01-01");
  return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
};
