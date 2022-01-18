/* Functions */
async function GetLogo(user) {
  const res = await axios.get(`https://api.github.com/users/${user}`);
  return res.data.avatar_url;
};

async function GetTeam() {
  const res = await axios.get('https://pi-ware.ml/assets/team.json');
  return res.data;
};

async function appendData(data) {
  var count = 1;
  for (var i = 0; i < data.length; i++) {
    /* Set variables */
    var name = data[i].name;
    var role = data[i].role;
    var logo = data[i].logourl;
    var desc = data[i].desc;
    
    /* Get elements */
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
    var br = document.createElement('br');
      
    if (data[i].logourl == "github") {
      var logogh = await GetLogo(data[i].name);
      var logo = logogh;
      console.log(`using github logo for ${data[i].name}`);
    } else if (data[i].logourl == "none" || null) {
      console.log(`using placeholder for ${data[i].name}`);
      var logo = "https://oxmc.xyz/assets/img/placeholder.png";
    } else {
      console.log(`using custom logo for ${data[i].name}`);
    };
    //console.log(logo);

    /* Add classes, images, title and description */
    applist.className += 'col card-deck';
    applist1.className += 'card shadow-sm';
    applistimg.className += 'card-img-top';
    applistimg.src=logo;
    applistdescdiv.className += 'card-body';
    applistdesc.className += 'card-text';
    applistname.innerHTML = name;
    applistname.className += 'card-text';
    applistdesc.innerHTML = desc;
    div2.className += 'd-flex justify-content-between align-items-center';

    /* Add to main html */
    applistdescdiv.appendChild(div2);
    applistdescdiv.appendChild(applistname);
    applistdescdiv.appendChild(applistdesc);
    applist1.appendChild(applistimg);
    applist1.appendChild(applistdescdiv);
    applist1.appendChild(br);
    applist.appendChild(applist1);
    mainContainer.appendChild(applist);

    if (count == 2) {
      count = 1;
    } else {
      count++;
    };
  };
};

async function start() {
  var teamjson = await GetTeam();
  appendData(teamjson);
};

/* Main */
start();
