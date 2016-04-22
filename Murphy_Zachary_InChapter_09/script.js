/* JavaScript 6th Edition
Chpater 9
Chapter case
Eating Well in Season

Author: Zach MurphyDate: 4-8-2016
Filename: script.js
*/

function clearCookies(){
  var cookieString = document.cookie;
  var cookieArray = cookieString.split("; ");
  var expiresDate = new Date();
  expiresDate.setDate(expiresDate.getDate() - 7);
  for(var i = 0; i < cookieArray.length; i++){
    document.cookie = cookieArray[i] + "; expires=" + expiresDate.toUTCString();
  }
}

if(window.addEventListener){
  window.addEventListener("load", clearCookies, false);
}else if(window.attachEvent){
  window.attachEvent("onload", clearCookies);
}
