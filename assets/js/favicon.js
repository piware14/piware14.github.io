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

if (currentMonth == "12") {
  if (currentDay == "25") {
    alert("Merry Christmas and Happy Holidays from the pi-ware team!");
  };
  link.href = 'https://pi-ware.ml/assets/images/logo-full-christmas.png';
};
