
      function handleResponse(response) {
      
       document.getElementById("crtablof").innerHTML =  JSON.stringify(response.published).replace(/^"(.+(?="$))"$/, '$1');
           document.getElementById("crtablofMN").innerHTML =  JSON.stringify(response.updated).replace(/^"(.+(?="$))"$/, '$1');
   
      var cher =  JSON.stringify(response.description);
      var nmbg =  JSON.stringify(response.name);
      if (nmbg.length >='8'){
             document.getElementById("lengtnamebg").innerHTML = 'جيد عدد أحرف أسم الموقع متوافق';

       document.getElementById("lengtnamebg").style.color = 'green';
            if (nmbg.length <='7'){
                             document.getElementById("lengtnamebg").innerHTML = 'سئ يجب زيادة الأحرف في أسم موقعك title لتظهر في البحث';
   document.getElementById("lengtnamebg").style.color = 'red';

            
}
      
      }
      
      
      
      if (cher.length >= '70'){
document.getElementById("lengthdsk").innerHTML = 'لا يوجد أخطاء عدد الأحرف مناسب للوصف';
       document.getElementById("lengthdsk").style.color = 'green';
      if (cher.length <= '70'){
             document.getElementById("lengthdsk").innerHTML = 'سئ عدد أحرف الوصف قصير جدا يجب أن يكون أزيد من 73 حرف';

       document.getElementById("lengthdsk").style.color = 'red';
      
}
//      
      
      
      }
      
          document.getElementById("title_result").innerHTML=  JSON.stringify(response.name).replace(/^"(.+(?="$))"$/, '$1');
                document.getElementById("description_result").innerHTML=  JSON.stringify(response.description);
document.getElementById("myFrame").src = JSON.stringify(response.url).replace(/^"(.+(?="$))"$/, '$1').replace(/^http:\/\//i, 'https://') ;

        document.getElementById("url_result").innerHTML=  JSON.stringify(response.url).replace(/^"(.+(?="$))"$/, '$1').replace(/^http:\/\//i, 'https://') ;
        
      }
