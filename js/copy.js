function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  var tooltip = document.getElementById(`${element}-tooltip`);
  tooltip.innerHTML = "Copied!";
  setTimeout(function() {tooltip.innerHTML = "Copy to clipboard";},1000);
}
