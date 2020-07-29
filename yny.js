
  var q = document.getElementById("Videid").value;
var thkey = document.getElementById("myWordsEncrypt").value;  

  $('#results').html('');
  $('buttons').html('');

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet, id',
    q: q,
    type: 'video',
	key: thkey
    
    
    },
  function (data) {
    $.each(data.items, function (i, item) {
      var output = getOutput(item);
    });
  });



function getOutput(item) {
  var namech = item.snippet.channelTitle;

var namechy = namech;
document.getElementById("namech").innerHTML = namechy;

  var nameurl = item.snippet.channelId;

var nameuser = nameurl;


var channelId = nameurl,
apiKey = thkey, 
api_response = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,

container = document.querySelector(".container"),
col = document.querySelector(".counter"),
odometer = document.getElementById("odometer");

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

//
