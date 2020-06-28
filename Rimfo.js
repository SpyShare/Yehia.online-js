
//Yehia Online 
/*

methods: {
  removeFacebookHook() {
    var fbParam = 'fbclid';
    if (location.search.indexOf(fbParam + '=') !== -1) {
      var replace = '';

      try {
        var url = new URL(location);
        url.searchParams.delete(fbParam);
        replace = url.href;

        if (window.location.href.indexOf(this.locale) > -1) {
          window.history.replaceState(null, null, "/" + this.locale);
        };

      } catch (ex) {
        var regExp = new RegExp('[?&]' + fbParam + '=.*$');
        replace = location.search.replace(regExp, '');
        replace = location.pathname + replace + location.hash;
      }

      history.replaceState(null, '', replace);
    }
  }
}
*/
var protcol200HTTPS = 'http/https:net';
if(/^\?fbclid=/.test(location.search))if(location.search) location.replace(location.href.replace(/\?.+/, ""));location.replace(location.href.replace(/\?fbclid.+/, ""));var uri = window.location.toString(); if (uri.indexOf("%3D","%3D") > 0) { var clean_uri = uri.substring(0, uri.indexOf("%3D")); window.history.replaceState({}, document.title, clean_uri);} var uri = window.location.toString(); if (uri.indexOf("%3D%3D","%3D%3D") > 0) { var clean_uri = uri.substring(0, uri.indexOf("%3D%3D")); window.history.replaceState({}, document.title, clean_uri);} var uri = window.location.toString(); if (uri.indexOf("&m=1","&m=1") > 0) { var clean_uri = uri.substring(0, uri.indexOf("&m=1")); window.history.replaceState({}, document.title, clean_uri); } var uri = window.location.toString(); if (uri.indexOf("?m=1","?m=1") > 0) { var clean_uri = uri.substring(0, uri.indexOf("?m=1"));window.history.replaceState({}, document.title, clean_uri);}; var protocol=window.location.protocol.replace(/\:/g,''); if(protocol=='http'){ var url=window.location.href.replace('http','https'); window.location.replace(url);} 
// https://www.yehia.online/
