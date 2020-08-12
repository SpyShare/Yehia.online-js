  function handleResponse(FGPSSa) {
  	var post = FGPSSa.feed.entry[0];
    var canioa = post.content.$t.replace(/<[^>]+>/g, '').replace(/ /gi,"");

    $('#myBtaan').html('\n'+canioa+'\n');
        $('#contenaat').html('\n'+canioa+'\n');
     
    document.getElementById("text").style.height = 400;

str = canioa;

}
  function handleResponse(response) {
  	var post = response.feed.entry[0];
       var canioa = post.content.$t.replace(/<[^>]+>/g, '').replace(/&nbsp;/gi,"");

    $('#myBtaan').html('\n'+canioa+'\n');
        $('#contenaat').html('\n'+canioa+'\n');
     
    document.getElementById("text").style.height = 400;

str = canioa;
   
    var countpsy = document.getElementById("endposta").innerHTML =post.title.$t;

if (countpsy.length >= '18'){

document.getElementById("endpswh").innerHTML = 'رائع العنوان عدد الأحرف مناسب'
 document.getElementById("endpswh").style.color = 'green'
if (countpsy.length <= '20'){

document.getElementById("endpswh").innerHTML = 'سئ عدد أحرف العنوان قصيرة'
 document.getElementById("endpswh").style.color = 'red'
}

}

      }
