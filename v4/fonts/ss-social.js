/*
* Symbolset
* www.symbolset.com
* Copyright © 2012 Oak Studios LLC
* 
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-social.js"></script>
*/
if(/(MSIE [7-9]\.|Opera.*Version\/(11|12)\.|Chrome\/([5-9]|10)\.|Version\/(4)[\.0-9]+ Safari\/|Version\/(4|5\.0)[\.0-9]+? Mobile\/.*Safari\/)/.test(navigator.userAgent)){if("function"!=typeof ss_legacy){!function(e,s){"undefined"!=typeof module?module.exports=s():"function"==typeof define&&"object"==typeof define.amd?define(s):this[e]=s()}("ss_ready",function(e){function s(e){for(d=1;e=n.shift();)e()}var t,n=[],o=!1,i=document,a=i.documentElement,r=a.doScroll,l="DOMContentLoaded",c="addEventListener",u="onreadystatechange",f="readyState",d=/^loade|c/.test(i[f]);return i[c]&&i[c](l,t=function(){i.removeEventListener(l,t,o),s()},o),r&&i.attachEvent(u,t=function(){/^c/.test(i[f])&&(i.detachEvent(u,t),s())}),e=r?function(s){self!=top?d?s():n.push(s):function(){try{a.doScroll("left")}catch(t){return setTimeout(function(){e(s)},50)}s()}()}:function(e){d?e():n.push(e)}});var ss_legacy=function(e){if(!e instanceof Object)return!1;if(e.length)for(var s=0;s<e.length;s++)ss_legacy(e[s]);else e.value?e.value=ss_liga(e.value):e.nodeValue?e.nodeValue=ss_liga(e.nodeValue):e.innerHTML&&(e.innerHTML=ss_liga(e.innerHTML))},ss_getElementsByClassName=function(e,s){for(var t=[],n=new RegExp("(^| )"+s+"( |$)"),o=e.getElementsByTagName("*"),i=0,a=o.length;a>i;i++)n.test(o[i].className)&&t.push(o[i]);return t},ss_liga=function(e){var s=new RegExp(ss_keywords.join("|"),"gi");return e.replace(s,function(e){return ss_icons[e.toLowerCase()]})};ss_ready(function(){document.getElementsByClassName?ss_legacy(document.getElementsByClassName("ss-icon")):ss_legacy(ss_getElementsByClassName(document.body,"ss-icon"))})}var ss_set={foursquare:"",googleplus:"",wordpress:"",pinterest:"",posterous:"",instagram:"",dribbble:"",linkedin:"",envelope:"✉",facebook:"",twitter:"",blogger:"","google+":"",behance:"",youtube:"",tumblr:"",github:"",paypal:"",flickr:"",skype:"",email:"✉",vimeo:"",mail:"✉"};if("object"!=typeof ss_icons||"object"!=typeof ss_icons){var ss_icons=ss_set,ss_keywords=[];for(var i in ss_set)ss_keywords.push(i)}else for(var i in ss_set)ss_icons[i]=ss_set[i],ss_keywords.push(i)}