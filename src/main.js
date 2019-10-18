var sendBtn = document.querySelector(".sendBtn");
var input = document.querySelector(".input");

sendBtn.onclick = function(evt) {
  var value = input.value
  ajax("post", "http://localhost:3100/api/sendMessage", "application/x-www-form-urlencoded", {text: value})
}

function ajax(method, url, header, body) {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function () {
    if(XHR.status==200 && XHR.readyState==4){
      var res = JSON.parse(XHR.responseText);
    }
  };
  XHR.open(method, url, true);
  XHR.setRequestHeader ("content-type", header)
  var body = sealize(body)
  XHR.send(body);
}

function sealize(obj) {
  var str = ''
  for (var key in obj) {
    str += key + '=' + obj[key] + "&"
  }
  return str.slice(0, -1)
}