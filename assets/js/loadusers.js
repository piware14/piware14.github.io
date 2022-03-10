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
    var discordid = data[i].discid;
    var name = data[i].name;
    var role = data[i].role;
    var logo = data[i].logourl;
    var desc = data[i].desc;
    
    var statuselement = `<div id="${name}" class="status offline" data-bs-toggle="tooltip" data-bs-placement="top" title="Discord status"></div>`;
    
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
    var script = document.createElement('script');
      
    if (logo == "github") {
      logo = await GetLogo(name);
      console.log(`using github logo for ${name}`);
    } else if (logo == "none" || logo == null) {
      console.log(`using placeholder for ${name}`);
      logo = "https://oxmc.xyz/assets/img/placeholder.png";
    } else {
      console.log(`using custom logo for ${name}`);
    };
    //console.log(logo);
    
    if (discordid == "none" || discordid == null) {
      console.log(`Not adding js to status element for ${name} to html as discord id is not set`);
    } else {
      script.innerHTML = `/* Get Status */ DiscordStatus({userId: "${discordid}", statElmId: "${name}", socket: true});`;
    };
    //console.log(statuselement);
    //console.log(script);

    /* Add classes, images, title and description */
    applist.className += 'col card-deck';
    applist1.className += 'card shadow-sm';
    applistimg.className += 'card-img-top';
    applistimg.src = logo;
    applistdescdiv.className += 'card-body';
    applistdesc.className += 'card-text';
    applistname.innerHTML = `${name} ${statuselement}`;
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
    if (statuselement != "none" || statuselement != "" || statuselement != null) {
      applist.appendChild(script);
    };
    mainContainer.appendChild(applist);

    /* Count loop fix */
    if (count == 2) {
      count = 1;
    } else {
      count++;
    };
  };
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
};

async function start() {
  var teamjson = await GetTeam();
  appendData(teamjson);
};

/* Main */
start();
