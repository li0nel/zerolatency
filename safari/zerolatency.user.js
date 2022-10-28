// ==UserScript==
// @name        Zero Latency Portal Enhancer
// @description Zero Latency Portal Enhancer
// @match       https://portal.zerolatencyvr.com/session/*
// @exclude-match: *://*.*
// @version 1.0
// @updateURL https://github.com/li0nel/zerolatency/raw/master/safari/zerolatency.user.js
// ==/UserScript==

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function htmlToElement(html) {
  var template = document.createElement('template');
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

var mailto = 'mailto:?subject=Your%20Zero%20Latency%20Gold%20Coast%20Photos&bcc=' + [].slice.call(document.getElementsByClassName('email js-email')).filter(function(el){
    return validateEmail(el.value);
}).map(function(el){
  return el.value;
}).join(',')

var emailButton = htmlToElement('<a class="button" href="' + mailto +'" id="Email" style="margin-right: 20px;">Email All</a>')

var saveButton = document.getElementById("SaveSession");
insertAfter(saveButton, emailButton);
