
  function handleResponse(FGPSSa) {
  	var post = FGPSSa.feed.entry[0];
    var canioa = post.content.$t.replace(/<[^>]+>/g, '').replace(/&nbsp;/gi,"");

    $('#myBtaan').html('\n'+canioa+'\n');
        $('#contenaat').html('\n'+canioa+'\n');
     
    document.getElementById("text").style.height = 400;

str = canioa;

}
  function handleResponse(response) {
  	var post = response.feed.entry[0];
       var canioa = post.content.$t.replace(/&lt;[^&gt;]+&gt;/g, '').replace(/&amp;nbsp;/gi,&quot;&quot;);

    $('#myBtaan').html('\n'+canioa+'\n');
        $('#contenaat').html('\n'+canioa+'\n');
     
    document.getElementById(&quot;text&quot;).style.height = 400;

str = canioa;
   
    var countpsy = document.getElementById(&quot;endposta&quot;).innerHTML =post.title.$t;

if (countpsy.length &gt;= &#39;18&#39;){

document.getElementById(&quot;endpswh&quot;).innerHTML = &#39;رائع العنوان عدد الأحرف مناسب&#39;
 document.getElementById(&quot;endpswh&quot;).style.color = &#39;green&#39;
if (countpsy.length &lt;= &#39;20&#39;){

document.getElementById(&quot;endpswh&quot;).innerHTML = &#39;سئ عدد أحرف العنوان قصيرة&#39;
 document.getElementById(&quot;endpswh&quot;).style.color = &#39;red&#39;
}

}

      }
