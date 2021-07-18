function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  var tooltip1 = document.getElementById("CopyTooltip1");
  var tooltip2 = document.getElementById("CopyTooltip2");
  var tooltip3 = document.getElementById("CopyTooltip3");
  tooltip1.innerHTML = "Copied!";
  tooltip2.innerHTML = "Copied!";
  tooltip3.innerHTML = "Copied!";
}

function Copy(id) {
  if ( id == "1" ) {
    var copyText1 = document.getElementById("CopyText1");
    copyText1.select();
    copyText1.setSelectionRange(0, 99999);
    document.execCommand("copy");
    var tooltip = document.getElementById("CopyTooltip1");
    tooltip.innerHTML = "Copied!";
    alert("Copied the text: " + copyText.value);
  } else if (id == "2") {
    var copyText2 = document.getElementById("CopyText2");
    copyText2.select();
    copyText2.setSelectionRange(0, 99999);
    document.execCommand("copy");
    var tooltip = document.getElementById("CopyTooltip2");
    tooltip.innerHTML = "Copied!";
  } else if (id == "2") {
    var copyText3 = document.getElementById("CopyText3");
    copyText3.select();
    copyText3.setSelectionRange(0, 99999);
    document.execCommand("copy");
    var tooltip = document.getElementById("CopyTooltip3");
    tooltip.innerHTML = "Copied!";
  }
}

function outFunc() {
  var tooltip1 = document.getElementById("CopyTooltip1");
  var tooltip2 = document.getElementById("CopyTooltip2");
  var tooltip3 = document.getElementById("CopyTooltip3");
  tooltip1.innerHTML = "Copy to clipboard";
  tooltip2.innerHTML = "Copy to clipboard";
  tooltip3.innerHTML = "Copy to clipboard";
}
