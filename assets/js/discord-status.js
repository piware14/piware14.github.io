async function DiscordStatus(opts) {
  if (!opts) throw new Error("Specify an options object");
  if (!opts.userId) throw new Error("Specify a user ID");
  if (!opts.statElmId) throw new Error("Specify a status element id");
  /* Socket */
  if (opts.socket) {
    var socket = opts.socket;
  } else {
    var socket = "false";
  };
  /* Variables */
  const statusDot = document.getElementById(opts.statElmId);
  /* Define updateStatus Function */
  function updateStatus(data) {
	//console.log(data.discord_status);
	switch (data.discord_status) {
      case "offline":
        statusDot.classList = "offline";
        break;
      case "online":
        statusDot.classList = "online";
		break;
	  case "dnd":
        statusDot.classList = "dnd";
		break;
	  case "idle":
        statusDot.classList = "idle";
		break;
	};
  };
  /* Get Status */
  lanyard({
    userId: opts.userId,
    socket: socket,
    onPresenceUpdate: updateStatus,
  });
}
