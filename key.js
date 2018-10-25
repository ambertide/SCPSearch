function scpQuerry(key) {
  entry_ = document.getElementById('scp');
  scp_number = entry_.value;
  keyValue_ = key.keyCode;
  if (keyValue_ == 13) {
    window.open("http://www.scp-wiki.net/scp-" + scp_number, "_blank");
  }
}
