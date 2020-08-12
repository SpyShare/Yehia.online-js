  function handleResponse(FGPSSa) {
  	var post = FGPSSa.feed.entry[0];
    var canioa = post.content.$t.replace(/<[^>]+>/g, '').replace(/ /gi,"");

    $('#myBtaan').html('\n'+canioa+'\n');
        $('#contenaat').html('\n'+canioa+'\n');
     
    document.getElementById("text").style.height = 400;

str = canioa;

}
