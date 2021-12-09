const date = new Date();
const currentMonth = date.getMonth() + 1;
const currentDay = date.getDate();
var link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement('link');
  link.rel = 'shortcut icon';
  link.type = 'image/gif';
  document.getElementsByTagName('head')[0].appendChild(link);
  var link = document.querySelector("link[rel~='icon']");
}

if (currentMonth == "12" && currentDay == "8") {
  link.href = 'https://pi-ware.ml/images/logo-full-christmas.png';
};
