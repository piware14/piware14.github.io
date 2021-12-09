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
    /*alert("Merry Christmas and Happy Holidays from the pi-ware team!");*/
    iziToast.show({
      id: 'haduken',
      theme: 'dark',
      icon: 'icon-contacts',
      title: 'Merry Chrsitmas!',
      displayMode: 2,
      message: 'Happy Holidays from the pi-ware team!',
      position: 'Center',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      progressBarColor: 'rgb(0, 255, 184)',
      image: '../images/logo-full-chrstmas.jpg',
      imageWidth: 70,
      layout: 2,
      onClosing: function(){
        console.info('onClosing');
      },
      onClosed: function(instance, toast, closedBy){
        console.info('Closed | closedBy: ' + closedBy);
      },
      iconColor: 'rgb(0, 255, 184)'
    });
  };
  link.href = 'https://pi-ware.ml/assets/images/logo-full-christmas.png';
};
