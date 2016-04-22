/* JavaScript 6th Edition
Chpater 9
Chapter case 9-3
Eating Well in Season

Author: Zach MurphyDate: 4-8-2016
Filename: script.js
*/

"use strict";

function processCookie() {
    if (document.getElementById("rememberinput").checked) {
        document.cookie = "username=" + document.getElementById("usernameinput").value;
    } else {
        var expiresDate = new Date();
        expiresDate.setDate(expiresDate.getDate() - 7);
        document.cookie = "username=null; expires=" + expiresDate.toUTCString();
    }
}

function populateInfo() {
    if (document.cookie) {
        var uname = document.cookie;
        uname = uname.substring(uname.lastIndexOf("=") + 1);
        document.getElementById("usernameinput").value = uname;
    }
}

function handleSubmit(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    processCookie();
    document.getElementsByTagName("form")[0].submit();
}

function createEventLister() {
    var loginForm = document.getElementsByTagName("form")[0];
    loginForm.addEventListener("submit", handleSubmit, false);
}


function setUpPage() {
    populateInfo();
    createEventLister();
}

window.onload = function () {
    setUpPage();
}
