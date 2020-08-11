  var person = prompt("أكتب معرف بلوجر", "");
var xchevE = prompt("رابط موقعك", "");

var xchev = xchevE+"/feeds/posts/default?max-results=500&alt=json-in-script&callback=loadtoc";

document.write("<script type='text/javascript' src='"+ xchev + "'><\/scr" + "ipt>");
