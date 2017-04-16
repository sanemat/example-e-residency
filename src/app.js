function log_text(s) {
  var d = document.createElement("div");
  d.innerHTML = s;
  document.getElementById('log').appendChild(d);
}

function debug() {
  window.hwcrypto.debug().then(
    function(response) {
      log_text("Debug: " + response);
    });
}

function sign() {
  const lang = 'en';
  const hash = '614eadb55ecd6c4938fe23a450edd51292519f7ffb51e91dc8aa5fbe';
  const hashtype = 'SHA-256';
  // Clear log
  document.getElementById('log').innerHTML = '';
  // Timestamp
  log_text("sign() clicked on " + new Date().toUTCString());
  // Sign
  window.hwcrypto.getCertificate({lang: lang}).then(function(response) {
    var cert = response;
    log_text("Using certificate:\n" + hexToPem(response.hex));
    window.hwcrypto.sign(cert, {type: hashtype, hex: hash}, {lang: lang}).then(function(response) {
      log_text("Generated signature:\n" + response.hex.match(/.{1,64}/g).join("\n"));
    }, function(err) {
      log_text("sign() failed: " + err);
    });
  }, function(err) {
    log_text("getCertificate() failed: " + err);
  });
}


document.getElementById('click2').addEventListener('click', () => {
  debug();
});

document.getElementById('click3').addEventListener('click', () => {
  sign();
});
