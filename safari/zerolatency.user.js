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
  
  var mailto = 'mailto:support@zerolatency.com?bcc=' + [].slice.call(document.getElementsByClassName('email js-email')).map(function(el){
    return el.value;
  }).join(',')
  
  var emailButton = htmlToElement('<a class="button" href="' + mailto +'" id="Email" style="margin-right: 20px;">Email All</a>')
  
  var saveButton = document.getElementById("SaveSession");
  insertAfter(saveButton, emailButton);
  