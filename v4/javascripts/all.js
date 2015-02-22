!function(){var t,e;t=function(){function t(t){var e,o;if(this.options={target:"instafeed",get:"popular",resolution:"low_resolution",sortBy:"most-recent",links:!0,limit:20,mock:!1},"object"==typeof t)for(e in t)o=t[e],this.options[e]=o;this.unique=this._genKey()}return t.prototype.run=function(){var e,o,i;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=this._buildUrl(),e=document.getElementsByTagName("head"),e[0].appendChild(i),o="instafeedCache"+this.unique,window[o]=new t(this.options),window[o].unique=this.unique),!0},t.prototype.parse=function(t){var e,o,i,n,s,r,a,c,l,h,p,d,u,f,m;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),"most-recent"!==this.options.sortBy)switch(p="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),h="least"===p[0]?!0:!1,p[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",h);break;case"liked":t.data=this._sortBy(t.data,"likes.count",h);break;case"commented":t.data=this._sortBy(t.data,"comments.count",h);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&this.options.mock===!1){if(document.getElementById(this.options.target).innerHTML="",a=t.data,a.length>this.options.limit&&(a=a.slice(0,this.options.limit+1||9e9)),null!=this.options.template&&"string"==typeof this.options.template){for(n="",r="",d=0,f=a.length;f>d;d++)s=a[d],r=this._makeTemplate(this.options.template,{model:s,id:s.id,link:s.link,image:s.images[this.options.resolution].url,caption:this._getObjectProperty(s,"caption.text"),likes:s.likes.count,comments:s.comments.count,location:this._getObjectProperty(s,"location.name")}),n+=r;document.getElementById(this.options.target).innerHTML=n}else{for(o=document.createDocumentFragment(),u=0,m=a.length;m>u;u++)s=a[u],c=document.createElement("img"),c.src=s.images[this.options.resolution].url,this.options.links===!0?(e=document.createElement("a"),e.href=s.link,e.appendChild(c),o.appendChild(e)):o.appendChild(c);document.getElementById(this.options.target).appendChild(o)}i=document.getElementsByTagName("head")[0],i.removeChild(document.getElementById("instafeed-fetcher")),l="instafeedCache"+this.unique,window[l]=void 0;try{delete window[l]}catch(g){}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},t.prototype._buildUrl=function(){var t,e,o;switch(t="https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if("string"!=typeof this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if("number"!=typeof this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if("number"!=typeof this.options.userId)throw new Error("No user specified. Use the 'userId' option.");if("string"!=typeof this.options.accessToken)throw new Error("No access token. Use the 'accessToken' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return o=""+t+"/"+e,o+=null!=this.options.accessToken?"?access_token="+this.options.accessToken:"?client_id="+this.options.clientId,o+="&count="+this.options.limit,o+="&callback=instafeedCache"+this.unique+".parse"},t.prototype._genKey=function(){var t;return t=function(){return(0|65536*(1+Math.random())).toString(16).substring(1)},""+t()+t()+t()+t()},t.prototype._makeTemplate=function(t,e){var o,i,n,s,r;for(i=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,o=t;i.test(o);)n=o.match(i)[1],s=null!=(r=this._getObjectProperty(e,n))?r:"",o=o.replace(i,""+s);return o},t.prototype._getObjectProperty=function(t,e){var o,i;for(e=e.replace(/\[(\w+)\]/g,".$1"),i=e.split(".");i.length;){if(o=i.shift(),!(null!=t&&o in t))return null;t=t[o]}return t},t.prototype._sortBy=function(t,e,o){var i;return i=function(t,i){var n,s;return n=this._getObjectProperty(t,e),s=this._getObjectProperty(i,e),o?n>s?1:-1:s>n?1:-1},t.sort(i.bind(this)),t},t}(),e="undefined"!=typeof exports&&null!==exports?exports:window,e.Instafeed=t}.call(this),function(){var t,e;t=function(){function t(t){var e,o;if(this.options={target:"instafeed",get:"popular",resolution:"low_resolution",sortBy:"most-recent",links:!0,limit:15,mock:!1},"object"==typeof t)for(e in t)o=t[e],this.options[e]=o;this.unique=this._genKey()}return t.prototype.run=function(){var e,o,i;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=this._buildUrl(),e=document.getElementsByTagName("head"),e[0].appendChild(i),o="instafeedCache"+this.unique,window[o]=new t(this.options),window[o].unique=this.unique),!0},t.prototype.parse=function(t){var e,o,i,n,s,r,a,c,l,h,p,d,u,f,m;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),"most-recent"!==this.options.sortBy)switch(p="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),h="least"===p[0]?!0:!1,p[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",h);break;case"liked":t.data=this._sortBy(t.data,"likes.count",h);break;case"commented":t.data=this._sortBy(t.data,"comments.count",h);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&this.options.mock===!1){if(document.getElementById(this.options.target).innerHTML="",a=t.data,a.length>this.options.limit&&(a=a.slice(0,this.options.limit+1||9e9)),null!=this.options.template&&"string"==typeof this.options.template){for(n="",r="",d=0,f=a.length;f>d;d++)s=a[d],r=this._makeTemplate(this.options.template,{model:s,id:s.id,link:s.link,image:s.images[this.options.resolution].url,caption:this._getObjectProperty(s,"caption.text"),likes:s.likes.count,comments:s.comments.count,location:this._getObjectProperty(s,"location.name")}),n+=r;document.getElementById(this.options.target).innerHTML=n}else{for(o=document.createDocumentFragment(),u=0,m=a.length;m>u;u++)s=a[u],c=document.createElement("img"),c.src=s.images[this.options.resolution].url,this.options.links===!0?(e=document.createElement("a"),e.href=s.link,e.appendChild(c),o.appendChild(e)):o.appendChild(c);document.getElementById(this.options.target).appendChild(o)}i=document.getElementsByTagName("head")[0],i.removeChild(document.getElementById("instafeed-fetcher")),l="instafeedCache"+this.unique,window[l]=void 0;try{delete window[l]}catch(g){}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},t.prototype._buildUrl=function(){var t,e,o;switch(t="https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if("string"!=typeof this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if("number"!=typeof this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if("number"!=typeof this.options.userId)throw new Error("No user specified. Use the 'userId' option.");if("string"!=typeof this.options.accessToken)throw new Error("No access token. Use the 'accessToken' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return o=""+t+"/"+e,o+=null!=this.options.accessToken?"?access_token="+this.options.accessToken:"?client_id="+this.options.clientId,o+="&count="+this.options.limit,o+="&callback=instafeedCache"+this.unique+".parse"},t.prototype._genKey=function(){var t;return t=function(){return(0|65536*(1+Math.random())).toString(16).substring(1)},""+t()+t()+t()+t()},t.prototype._makeTemplate=function(t,e){var o,i,n,s,r;for(i=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,o=t;i.test(o);)n=o.match(i)[1],s=null!=(r=this._getObjectProperty(e,n))?r:"",o=o.replace(i,""+s);return o},t.prototype._getObjectProperty=function(t,e){var o,i;for(e=e.replace(/\[(\w+)\]/g,".$1"),i=e.split(".");i.length;){if(o=i.shift(),!(null!=t&&o in t))return null;t=t[o]}return t},t.prototype._sortBy=function(t,e,o){var i;return i=function(t,i){var n,s;return n=this._getObjectProperty(t,e),s=this._getObjectProperty(i,e),o?n>s?1:-1:s>n?1:-1},t.sort(i.bind(this)),t},t}(),e="undefined"!=typeof exports&&null!==exports?exports:window,e.Instafeed=t}.call(this),/*!
 * headroom.js v0.3.11 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2013 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
function(t){"use strict";function e(t){this.callback=t,this.ticking=!1}function o(t,i){i=i||o.options,this.lastKnownScrollY=0,this.elem=t,this.debouncer=new e(this.update.bind(this)),this.tolerance=i.tolerance,this.classes=i.classes,this.offset=i.offset,this.initialised=!1}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,e.prototype={constructor:e,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.update.bind(this)),this.ticking=!0)},handleEvent:function(){this.requestTick()}},o.prototype={constructor:o,init:function(){this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100)},destroy:function(){this.initialised=!1,window.removeEventListener("scroll",this.debouncer,!1),this.elem.classList.remove(this.classes.unpinned,this.classes.pinned,this.classes.initial)},attachEvent:function(){this.initialised||(this.initialised=!0,window.addEventListener("scroll",this.debouncer,!1))},unpin:function(){this.elem.classList.add(this.classes.unpinned),this.elem.classList.remove(this.classes.pinned)},pin:function(){this.elem.classList.remove(this.classes.unpinned),this.elem.classList.add(this.classes.pinned)},getScrollY:function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},update:function(){var t=this.getScrollY(),e=Math.abs(t-this.lastKnownScrollY)>=this.tolerance;0>t||(e&&(t>this.lastKnownScrollY&&t>=this.offset?this.unpin():t<this.lastKnownScrollY&&this.pin()),this.lastKnownScrollY=t)}},o.options={tolerance:0,offset:0,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",initial:"headroom"}},t.Headroom=o}(this),function(){function t(t,e,o){this.pluginCode=e,this.widgetCode=t,this.dataApiCode=o}t.prototype={constructor:t,widget:function(t){return"var headroom = new Headroom(elem, "+JSON.stringify(t,null,"  ")+");\nheadroom.init();\n\n"+"// to destroy\n"+"headroom.destroy();"},plugin:function(t){return'$("header").headroom('+JSON.stringify(t,null,"  ")+");\n\n"+"// to destroy\n"+'$("#header").headroom("destroy");'},dataApi:function(t){return'&lt;header data-headroom data-tolerance="'+t.tolerance+'" '+'data-offset="'+t.offset+'" '+"data-classes='"+JSON.stringify(t.classes)+"'&gt;&lt;/header&gt;\n\n"+"// to destroy, in your JS:\n"+'$("header").data("headroom").destroy();'},generate:function(t){this.pluginCode.innerHTML=this.plugin(t),Prism.highlightElement(this.pluginCode,!1),this.widgetCode.innerHTML=this.widget(t),Prism.highlightElement(this.widgetCode,!1),this.dataApiCode.innerHTML=this.dataApi(t),Prism.highlightElement(this.dataApiCode,!1)}},window.CodeGenerator=t}(),function(){function t(t,e,o){this.inputs=t,this.codeGenerator=o,this.styles=e}t.prototype={constructor:t,init:function(){if(this.inputs){var t=this.getOptions(this.inputs);this.headroom=new Headroom(document.querySelector("header"),t),this.headroom.init(),this.codeGenerator.generate(t),this.listen()}},getOptions:function(){for(var t,e=this.inputs.querySelectorAll("[name=style]"),o=e.length-1;o>=0;o--)if(e[o].checked){t=this.styles[e[o].value];break}return{tolerance:parseInt(this.inputs.querySelector("#tolerance").value,10),offset:parseInt(this.inputs.querySelector("#offset").value,10),classes:t}},updateWidget:function(){var t=this.getOptions(this.inputs),e=this.headroom;e.destroy(),e.classes=t.classes,e.offset=t.offset,e.tolerance=t.tolerance,e.init(),this.codeGenerator.generate(t)},listen:function(){for(var t=this.inputs.length-1;t>=0;t--)this.inputs[t].addEventListener("change",this.updateWidget.bind(this),!1)}};var e=document.querySelector("form"),o=new CodeGenerator(document.querySelector(".widget-code"),document.querySelector(".plugin-code"),document.querySelector(".data-api-code")),i=new t(e,styles,o);i.init()}();