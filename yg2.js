
  var q9002 = document.getElementById("Videid1").value;
var theky = document.getElementById("myWordsEncrypt").value;
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

var generated19002 = description9002;
document.getElementById("namech1").innerHTML = generated19002;

  return generated9002;
}
//
  var q9003 = document.getElementById("Videid2").value;
  $('#results').html('');
  $('buttons').html('');

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
document.getElementById("namech1").innerHTML = generated19003;


var channelId = manosa9003,
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



 var q9004 = document.getElementById("Videid3").value;

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
document.getElementById("namech2").innerHTML = description9004;


var channelId = manosa9004,
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

 var q9005 = document.getElementById("Videid4").value;

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
document.getElementById("namech4").innerHTML = description9005;


var channelId = manosa9005,
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

 var q9006 = document.getElementById("Videid5").value;

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
document.getElementById("namech6").innerHTML = description9006;


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

 var q9007 = document.getElementById("Videid6").value;

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
document.getElementById("namech7").innerHTML = description9007;


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
 var q9008 = document.getElementById("Videid7").value;

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
document.getElementById("namech8").innerHTML = description9008;


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
 var q9009 = document.getElementById("Videid8").value;

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
document.getElementById("namech9").innerHTML = description9009;


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
