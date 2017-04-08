function log_text(s) {
  var d = document.createElement("div");
  d.innerHTML = s;
  document.getElementById('log').appendChild(d);
}
function debug() {
  window.hwcrypto.debug()
    .then(function(response) {
      log_text("Debug: " + response);
    });
}
document.addEventListener("DOMContentLoaded", function(){
  debug();
});
