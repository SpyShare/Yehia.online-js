
var theky = document.getElementById("myWordsEncrypt").value;
 

  var q9001 = document.getElementById("Videid1").value;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {

$("#chsub1").prop("href", "vnd.youtube://"+q9001)
$("#tgch").prop("href", "tg://resolve?domain=spyshare")

}
else{

$("#chsub1").prop("href", "https://www.youtube.com/watch?v="+q9001)
$("#tgch").prop("href", "https://t.me/s/spyshare")

}



  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet, id',
    q: q9001,
    type: 'video',
	key: theky
    
    
    },
  function (data9001) {
    $.each(data9001.items, function (i, item9001) {
      var output9001 = getOutput9001(item9001);
    });
  });



function getOutput9001(item9001) {
  var description9001 = item9001.snippet.channelTitle;
var manosa9001 = item9001.snippet.channelId;
var generated19001 = description9001;
document.getElementById("namech1").innerHTML = generated19001;


var channelId = manosa9001,
apiKey = theky, 
api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

container = document.querySelector(".container"),
col = document.querySelector(".counter"),
odometer = document.getElementById("odometer1");

let subCount = 0;

const urls = [api_response];

setInterval(() => {
  requestCall(api_response);
}, 2000);

const requestCall = (apiCall) =>
fetch(apiCall).
then(blob => blob.json()).
then(data => {
  subCount = data.items[0].statistics.subscriberCount;
  odometer.innerHTML = subCount;
});

}


  var q9002 = document.getElementById("Videid2").value;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {

$("#chsub2").prop("href", "vnd.youtube://"+q9002)
$("#tgch").prop("href", "tg://resolve?domain=spyshare")

}
else{

$("#chsub2").prop("href", "https://www.youtube.com/watch?v="+q9002)
$("#tgch").prop("href", "https://t.me/s/spyshare")

}


  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet, id',
    q: q9002,
    type: 'video',
	key: theky
    
    
    },
  function (data9002) {
    $.each(data9002.items, function (i, item9002) {
      var output9002 = getOutput9002(item9002);
    });
  });



function getOutput9002(item9002) {
  var description9002 = item9002.snippet.channelTitle;
var manosa9002 = item9002.snippet.channelId;
var generated19002 = description9002;
document.getElementById("namech2").innerHTML = generated19002;


var channelId = manosa9002,
apiKey = theky, 
api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

container = document.querySelector(".container"),
col = document.querySelector(".counter"),
odometer = document.getElementById("odometer2");

let subCount = 0;

const urls = [api_response];

setInterval(() => {
  requestCall(api_response);
}, 2000);

const requestCall = (apiCall) =>
fetch(apiCall).
then(blob => blob.json()).
then(data => {
  subCount = data.items[0].statistics.subscriberCount;
  odometer.innerHTML = subCount;
});

}


  var q9003 = document.getElementById("Videid3").value;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {

$("#chsub3").prop("href", "vnd.youtube://"+q9003)
$("#tgch").prop("href", "tg://resolve?domain=spyshare")

}
else{

$("#chsub3").prop("href", "https://www.youtube.com/watch?v="+q9003)
$("#tgch").prop("href", "https://t.me/s/spyshare")

}

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet, id',
    q: q9003,
    type: 'video',
	key: theky
    
    
    },
  function (data9003) {
    $.each(data9003.items, function (i, item9003) {
      var output9003 = getOutput9003(item9003);
    });
  });



function getOutput9003(item9003) {
  var description9003 = item9003.snippet.channelTitle;
var manosa9003 = item9003.snippet.channelId;
var generated19003 = description9003;
document.getElementById("namech3").innerHTML = generated19003;


var channelId = manosa9003,
apiKey = theky, 
api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

container = document.querySelector(".container"),
col = document.querySelector(".counter"),
odometer = document.getElementById("odometer3");

let subCount = 0;

const urls = [api_response];

setInterval(() => {
  requestCall(api_response);
}, 2000);

const requestCall = (apiCall) =>
fetch(apiCall).
then(blob => blob.json()).
then(data => {
  subCount = data.items[0].statistics.subscriberCount;
  odometer.innerHTML = subCount;
});

}

  var q9004 = document.getElementById("Videid4").value;



var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {

$("#chsub4").prop("href", "vnd.youtube://"+q9004)
$("#tgch").prop("href", "tg://resolve?domain=spyshare")

}
else{

$("#chsub4").prop("href", "https://www.youtube.com/watch?v="+q9004)
$("#tgch").prop("href", "https://t.me/s/spyshare")

}

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet, id',
    q: q9004,
    type: 'video',
	key: theky
    
    
    },
  function (data9004) {
    $.each(data9004.items, function (i, item9004) {
      var output9004 = getOutput9004(item9004);
    });
  });



function getOutput9004(item9004) {
  var description9004 = item9004.snippet.channelTitle;
var manosa9004 = item9004.snippet.channelId;
var generated19004 = description9004;
document.getElementById("namech4").innerHTML = generated19004;


var channelId = manosa9004,
apiKey = theky, 
api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

container = document.querySelector(".container"),
col = document.querySelector(".counter"),
odometer = document.getElementById("odometer4");

let subCount = 0;

const urls = [api_response];

setInterval(() => {
  requestCall(api_response);
}, 2000);

const requestCall = (apiCall) =>
fetch(apiCall).
then(blob => blob.json()).
then(data => {
  subCount = data.items[0].statistics.subscriberCount;
  odometer.innerHTML = subCount;
});

}



  var q9005 = document.getElementById("Videid5").value;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {

$("#chsub5").prop("href", "vnd.youtube://"+q9005)
$("#tgch").prop("href", "tg://resolve?domain=spyshare")

}
else{

$("#chsub5").prop("href", "https://www.youtube.com/watch?v="+q9005)
$("#tgch").prop("href", "https://t.me/s/spyshare")

}
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet, id',
    q: q9005,
    type: 'video',
	key: theky
    
    
    },
  function (data9005) {
    $.each(data9005.items, function (i, item9005) {
      var output9005 = getOutput9005(item9005);
    });
  });



function getOutput9005(item9005) {
  var description9005 = item9005.snippet.channelTitle;
var manosa9005 = item9005.snippet.channelId;
var generated19005 = description9005;
document.getElementById("namech5").innerHTML = generated19005;


var channelId = manosa9005,
apiKey = theky, 
api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

container = document.querySelector(".container"),
col = document.querySelector(".counter"),
odometer = document.getElementById("odometer5");

let subCount = 0;

const urls = [api_response];

setInterval(() => {
  requestCall(api_response);
}, 2000);

const requestCall = (apiCall) =>
fetch(apiCall).
then(blob => blob.json()).
then(data => {
  subCount = data.items[0].statistics.subscriberCount;
  odometer.innerHTML = subCount;
});

}



  var q9006 = document.getElementById("Videid6").value;



var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {

$("#chsub6").prop("href", "vnd.youtube://"+q9006)
$("#tgch").prop("href", "tg://resolve?domain=spyshare")

}
else{

$("#chsub6").prop("href", "https://www.youtube.com/watch?v="+q9006)
$("#tgch").prop("href", "https://t.me/s/spyshare")

}
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet, id',
    q: q9006,
    type: 'video',
	key: theky
    
    
    },
  function (data9006) {
    $.each(data9006.items, function (i, item9006) {
      var output9006 = getOutput9006(item9006);
    });
  });



function getOutput9006(item9006) {
  var description9006 = item9006.snippet.channelTitle;
var manosa9006 = item9006.snippet.channelId;
var generated19006 = description9006;
document.getElementById("namech6").innerHTML = generated19006;


var channelId = manosa9006,
apiKey = theky, 
api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

container = document.querySelector(".container"),
col = document.querySelector(".counter"),
odometer = document.getElementById("odometer6");

let subCount = 0;

const urls = [api_response];

setInterval(() => {
  requestCall(api_response);
}, 2000);

const requestCall = (apiCall) =>
fetch(apiCall).
then(blob => blob.json()).
then(data => {
  subCount = data.items[0].statistics.subscriberCount;
  odometer.innerHTML = subCount;
});

}

  var q9007 = document.getElementById("Videid7").value;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {

$("#chsub7").prop("href", "vnd.youtube://"+q9007)
$("#tgch").prop("href", "tg://resolve?domain=spyshare")

}
else{

$("#chsub7").prop("href", "https://www.youtube.com/watch?v="+q9007)
$("#tgch").prop("href", "https://t.me/s/spyshare")

}

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet, id',
    q: q9007,
    type: 'video',
	key: theky
    
    
    },
  function (data9007) {
    $.each(data9007.items, function (i, item9007) {
      var output9007 = getOutput9007(item9007);
    });
  });



function getOutput9007(item9007) {
  var description9007 = item9007.snippet.channelTitle;
var manosa9007 = item9007.snippet.channelId;
var generated19007 = description9007;
document.getElementById("namech7").innerHTML = generated19007;


var channelId = manosa9007,
apiKey = theky, 
api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

container = document.querySelector(".container"),
col = document.querySelector(".counter"),
odometer = document.getElementById("odometer7");

let subCount = 0;

const urls = [api_response];

setInterval(() => {
  requestCall(api_response);
}, 2000);

const requestCall = (apiCall) =>
fetch(apiCall).
then(blob => blob.json()).
then(data => {
  subCount = data.items[0].statistics.subscriberCount;
  odometer.innerHTML = subCount;
});

}

  var q9008 = document.getElementById("Videid8").value;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {

$("#chsub8").prop("href", "vnd.youtube://"+q9008)
$("#tgch").prop("href", "tg://resolve?domain=spyshare")

}
else{

$("#chsub8").prop("href", "https://www.youtube.com/watch?v="+q9008)
$("#tgch").prop("href", "https://t.me/s/spyshare")

}

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet, id',
    q: q9008,
    type: 'video',
	key: theky
    
    
    },
  function (data9008) {
    $.each(data9008.items, function (i, item9008) {
      var output9008 = getOutput9008(item9008);
    });
  });



function getOutput9008(item9008) {
  var description9008 = item9008.snippet.channelTitle;
var manosa9008 = item9008.snippet.channelId;
var generated19008 = description9008;
document.getElementById("namech8").innerHTML = generated19008;


var channelId = manosa9008,
apiKey = theky, 
api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

container = document.querySelector(".container"),
col = document.querySelector(".counter"),
odometer = document.getElementById("odometer8");

let subCount = 0;

const urls = [api_response];

setInterval(() => {
  requestCall(api_response);
}, 2000);

const requestCall = (apiCall) =>
fetch(apiCall).
then(blob => blob.json()).
then(data => {
  subCount = data.items[0].statistics.subscriberCount;
  odometer.innerHTML = subCount;
});

}


  var q9009 = document.getElementById("Videid9").value;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {

$("#chsub9").prop("href", "vnd.youtube://"+q9009)
$("#tgch").prop("href", "tg://resolve?domain=spyshare")

}
else{

$("#chsub9").prop("href", "https://www.youtube.com/watch?v="+q9009)
$("#tgch").prop("href", "https://t.me/s/spyshare")

}

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet, id',
    q: q9009,
    type: 'video',
	key: theky
    
    
    },
  function (data9009) {
    $.each(data9009.items, function (i, item9009) {
      var output9009 = getOutput9009(item9009);
    });
  });



function getOutput9009(item9009) {
  var description9009 = item9009.snippet.channelTitle;
var manosa9009 = item9009.snippet.channelId;
var generated19009 = description9009;
document.getElementById("namech9").innerHTML = generated19009;


var channelId = manosa9009,
apiKey = theky, 
api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

container = document.querySelector(".container"),
col = document.querySelector(".counter"),
odometer = document.getElementById("odometer9");

let subCount = 0;

const urls = [api_response];

setInterval(() => {
  requestCall(api_response);
}, 2000);

const requestCall = (apiCall) =>
fetch(apiCall).
then(blob => blob.json()).
then(data => {
  subCount = data.items[0].statistics.subscriberCount;
  odometer.innerHTML = subCount;
});

}


