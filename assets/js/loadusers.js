fetch('https://pi-ware.ml/assets/team.json').then(function (response) {
  return response.json();
}).then(function (data) {
  //console.log(data)
  appendData(data);
}).catch(function (err) {
  console.log('error: ' + err);
});

function appendData(data) {
  var count = 1;
  for (var i = 0; i < data.length; i++) {
    var app = 'AppList'+count
    var mainContainer = document.getElementById(app);

    /* Make elements */
    var applist = document.createElement('div');
    var applist1 = document.createElement('div');
    var applistimg = document.createElement('img');
    var applistdescdiv = document.createElement('div');
    var applistname = document.createElement('h1');
    var applistdesc = document.createElement('p');
    var div2 = document.createElement('div');

    /* Add classes, images, title and description */
    applist.className += 'col';
    applist1.className += 'card shadow-sm';
    applistimg.className += 'card-img-top';
    applistimg.src=data[i].logourl;
    applistdescdiv.className += 'card-body';
    applistdesc.className += 'card-text';
    applistname.innerHTML = data[i].name;
    applistname.className += 'card-text';
    applistdesc.innerHTML = data[i].desc;
    div2.className += 'd-flex justify-content-between align-items-center';

    /* Add to main html */
    applistdescdiv.appendChild(div2);
    applistdescdiv.appendChild(applistname);
    applistdescdiv.appendChild(applistdesc);
    applist1.appendChild(applistimg);
    applist1.appendChild(applistdescdiv);
    applist.appendChild(applist1);
    mainContainer.appendChild(applist);

    if (count == 2) {
      count = 1;
    } else {
      count++;
    };
  };
};
