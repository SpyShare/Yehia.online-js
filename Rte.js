$(window).load(function(){
var qwynw_1=` <header>
	<nav role='navigation'>
	  	<ul>
			<li id="menu"><a href="#"><i class="material-icons">menu</i></a></li>
			<li id="title">الملف الشخصي</li>
			<li id="more"><a href="#"><i class="material-icons">more_vert</i></a></li>
	  	</ul>
	</nav>	
</header>
<main>
	<div class="jumbo" style='  width: 100%;
  height: 400px;
  background: url(
`




,back2=`) center center no-repeat;
  background-size: cover;'></div>
	<div class="container icons">
		<div class="big-icon" style='  width: 180px;
  height: 180px;
  background: url(
`
, endback2 = `) center top;
  background-size: 140%;
  border-radius: 50%;
  border: 2px solid white;
  margin-top: -90px;'></div>
		<div class="rate">
		</div>
		<div class="add">
		</div>
	</div>
    
    
    
	<div class="details">
		<h3>
`




,

ed="</div>",

blueBtn="<div class='buttonYnW -blue center'>",

salmon="<div class='buttonYnW -salmon center'>",

green="<div class='buttonYnW -green center'>",

dark="<div class='buttonYnW -dark center'>",

nqw_questions=[


qwynw_1+document.getElementById("imYn_1_1").src+back2+document.getElementById("imYn_1_1").src+endback2+document.getElementById("My_Ask_1_1").textContent

,
qwynw_1+document.getElementById("imYn_2_2").src+back2+document.getElementById("imYn_2_2").src+endback2+document.getElementById("My_Ask_2_2").textContent



,
qwynw_1+document.getElementById("imYn_3_3").src+back2+document.getElementById("imYn_3_3").src+endback2+document.getElementById("My_Ask_3_3").textContent



,
qwynw_1+document.getElementById("imYn_4_4").src+back2+document.getElementById("imYn_4_4").src+endback2+document.getElementById("My_Ask_4_4").textContent



,
qwynw_1+document.getElementById("imYn_5_5").src+back2+document.getElementById("imYn_5_5").src+endback2+document.getElementById("My_Ask_5_5").textContent



,
qwynw_1+document.getElementById("imYn_6_6").src+back2+document.getElementById("imYn_6_6").src+endback2+document.getElementById("My_Ask_6_6").textContent


,
qwynw_1+document.getElementById("imYn_7_7").src+back2+document.getElementById("imYn_7_7").src+endback2+document.getElementById("My_Ask_7_7").textContent



,
qwynw_1+document.getElementById("imYn_8_8").src+back2+document.getElementById("imYn_8_8").src+endback2+document.getElementById("My_Ask_8_8").textContent






];












var nqw_answers = [
    [
        blueBtn+document.getElementById("slYn_1_1").textContent+ed,
        salmon+document.getElementById("slYn_1_2").textContent+ed,
        green+document.getElementById("slYn_1_3").textContent+ed
        ,dark+document.getElementById("slYn_1_4").textContent+ed
],

    [    
        blueBtn+document.getElementById("slYn_2_1").textContent+ed,
        salmon+document.getElementById("slYn_2_2").textContent+ed,
        green+document.getElementById("slYn_2_3").textContent+ed
        ,dark+document.getElementById("slYn_2_4").textContent+ed
 ]
,

    [    
        blueBtn+document.getElementById("slYn_3_1").textContent+ed,
        salmon+document.getElementById("slYn_3_2").textContent+ed,
        green+document.getElementById("slYn_3_3").textContent+ed
        ,dark+document.getElementById("slYn_3_4").textContent+ed
 ]

 
 ];
 
 
 
 
 
 
 
 
 
 
 
 
 
var nqw_scores=[[document.getElementById("ScYn_1_1").value,document.getElementById("ScYn_1_2").value,document.getElementById("ScYn_1_3").value,document.getElementById("ScYn_1_4").value],[document.getElementById("ScYn_2_1").value,document.getElementById("ScYn_2_2").value,document.getElementById("ScYn_2_3").value,document.getElementById("ScYn_2_4").value],[$("#ScYn_3_1").val(),$("#ScYn_3_2").val(),$("#ScYn_3_3").val(),$("#ScYn_3_4").val()],[$("#ScYn_4_1").val(),$("#ScYn_4_2").val(),$("#ScYn_4_3").val(),$("#ScYn_4_4").val()],[$("#ScYn_5_1").val(),$("#ScYn_5_2").val(),$("#ScYn_5_3").val(),$("#ScYn_5_4").val()],[$("#ScYn_6_1").val(),$("#ScYn_6_2").val(),$("#ScYn_6_3").val(),$("#ScYn_6_4").val()],[$("#ScYn_7_1").val(),$("#ScYn_7_2").val(),$("#ScYn_7_3").val(),$("#ScYn_7_4").val()],[$("#ScYn_8_1").val(),$("#ScYn_8_2").val(),$("#ScYn_8_3").val(),$("#ScYn_8_4").val()]],nqw_qCount=0,nqw_score=0;$("#nqw_start").click(function(){nqw_score=0,showQuestion()}),$("#nqw_options").on("click","a",function(_){void 0!==$(this).data("score")?(nqw_score+=$(this).data("score"),++nqw_qCount<nqw_answers.length?showQuestion():showOutcome(nqw_score)):$(this).data("action")&&"restart"==$(this).data("action")&&location.reload()});


function showOutcome(s) {
    if (s >= 20) {
        nqw_outTitle = document.getElementById("M_20_").textContent;
       
        nqw_outDesc = document.getElementById("Desc_20_").value;
        
        nqw_outPic = document.getElementById("Pic_20_").src;
    }
    
   else if (s >= 40) {
        nqw_outTitle = document.getElementById("M_40_").textContent;
       
        nqw_outDesc = document.getElementById("Desc_40_").value;
        
        nqw_outPic = document.getElementById("Pic_40_").src;
    } 
         
    else if (s >= 60) {
        nqw_outTitle = document.getElementById("M_60_").textContent;
       
        nqw_outDesc = document.getElementById("Desc_60_").value;
        
        nqw_outPic = document.getElementById("Pic_60_").src;
    } 
         

     
         else if (s >= 80) {
        nqw_outTitle = document.getElementById("M_80_").textContent;
       
        nqw_outDesc = document.getElementById("Desc_80_").value;
        
        nqw_outPic = document.getElementById("Pic_80_").src;
    } 
         

     
         else if (s >= 100) {
        nqw_outTitle = document.getElementById("M_100_").textContent;
       
        nqw_outDesc = document.getElementById("Desc_100_").value;
        
        nqw_outPic = document.getElementById("Pic_100_").src;
    } 
         

     
     
         
     else  {
        nqw_outTitle = document.getElementById("Else_M").textContent;
       
        nqw_outDesc = document.getElementById("Else_Desc").value;
        
        nqw_outPic = document.getElementById("Else_Pic").src;
        }
        
        
 nqw_outMessage="<p id='pgko'>"+nqw_outDesc+"</p>",nqw_shareOpts="<br><br><br><div class='social-share-btns-container'> <div class='social-share-btns'> <a class='share-btn share-btn-twitter' href='https://twitter.com/intent/tweet?text="+nqw_outDesc+" rel='nofollow' target='_blank'> <i class='ion-social-twitter'></i> Tweet </a> <a class='share-btn share-btn-facebook' href='https://www.facebook.com/sharer/sharer.php?u=#' rel='nofollow' target='_blank'> <i class='ion-social-facebook'></i> Share </a>",$("#nqw_question").html(nqw_outTitle+"<br /><img src='"+nqw_outPic+"' />"),$("#nqw_options").html(nqw_outMessage+nqw_shareOpts);
    }

    function showQuestion() {
        $('#nqw_question').html(nqw_questions[nqw_qCount]);
        var nqw_list = "";
        for (i = 0; i < nqw_answers[nqw_qCount].length; i++) {
            nqw_list += "<a data-score='" + nqw_scores[nqw_qCount][i] + "'>" + nqw_answers[nqw_qCount][i] + "</a>";
        }
        $('#nqw_options').html("<div class='button-container'><ul>" + nqw_list + "</ul></div>");
    }
});
