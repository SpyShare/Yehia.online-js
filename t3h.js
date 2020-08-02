$(document).keydown(function(e){
      if( e.which === 89 && e.ctrlKey ){

        location.href = 'https://'+window.location.hostname;

      }

      else if( e.which === 81 && e.ctrlKey ){

        location.href= 'https://'+location.hostname+'/p/reuse.html';
      }          
}); 
$("img").mousedown(function(){
    return false;
});
var i = document.getElementById(&quot;menu&quot;).style;
if (document.addEventListener) {
  document.addEventListener(&#39;contextmenu&#39;, function(e) {
    var posX = e.clientX;
    var posY = e.clientY;
    menu(posX, posY);
    e.preventDefault();
  }, false);
  document.addEventListener(&#39;click&#39;, function(e) {
    i.opacity = &quot;0&quot;;
    setTimeout(function() {
      i.visibility = &quot;hidden&quot;;
    }, 501);
  }, false);
} else {
  document.attachEvent(&#39;oncontextmenu&#39;, function(e) {
    var posX = e.clientX;
    var posY = e.clientY;
    menu(posX, posY);
    e.preventDefault();
  });
  document.attachEvent(&#39;onclick&#39;, function(e) {
    i.opacity = &quot;0&quot;;
    setTimeout(function() {
      i.visibility = &quot;hidden&quot;;
    }, 501);
  });
}

function menu(x, y) {
  i.top = y + &quot;px&quot;;
  i.left = x + &quot;px&quot;;
  i.visibility = &quot;visible&quot;;
  i.opacity = &quot;1&quot;;
}


var elems = document.body.getElementsByTagName("img");
for(var i = 0; i < elems.length; i++)
{
  elems[i].setAttribute("onclick",'window.open("","_parent","");window.close();window.open(location.href);');
}

