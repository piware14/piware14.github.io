var cfh = document.getElementById("confetti-holder");
var avy = yearssince("2021");
if (currentMonth == "4") {
  if (currentDay == "24") {
    iziToast.show({
      id: 'anniversary',
      theme: 'dark',
      icon: 'icon-contacts',
      title: 'Happy anniversary to pi-ware!',
      displayMode: 2,
      message: `Todays pi-ware's ${avy} year anniversary!`,
      position: 'center',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      progressBarColor: 'rgb(0, 255, 184)',
      image: '../assets/images/logo-full.png',
      imageWidth: 70,
      layout: 2,
      iconColor: 'rgb(0, 255, 184)'
    });
    for (let i = 0; i < 25; i++) {
      let div = document.createElement("div");
      div.classList = "confetti";
      cfh.appendChild(div);
    };
  };
};
