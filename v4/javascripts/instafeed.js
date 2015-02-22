!function(){var t,e;t=function(){function t(t){var e,o;if(this.options={target:"instafeed",get:"popular",resolution:"low_resolution",sortBy:"most-recent",links:!0,limit:20,mock:!1},"object"==typeof t)for(e in t)o=t[e],this.options[e]=o;this.unique=this._genKey()}return t.prototype.run=function(){var e,o,i;if("string"!=typeof this.options.clientId&&"string"!=typeof this.options.accessToken)throw new Error("Missing clientId or accessToken.");if("string"!=typeof this.options.accessToken&&"string"!=typeof this.options.clientId)throw new Error("Missing clientId or accessToken.");return null!=this.options.before&&"function"==typeof this.options.before&&this.options.before.call(this),"undefined"!=typeof document&&null!==document&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=this._buildUrl(),e=document.getElementsByTagName("head"),e[0].appendChild(i),o="instafeedCache"+this.unique,window[o]=new t(this.options),window[o].unique=this.unique),!0},t.prototype.parse=function(t){var e,o,i,n,s,r,a,c,p,l,h,u,d,f,m;if("object"!=typeof t){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(200!==t.meta.code){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,t.meta.error_message),!1;throw new Error("Error from Instagram: "+t.meta.error_message)}if(0===t.data.length){if(null!=this.options.error&&"function"==typeof this.options.error)return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}if(null!=this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,t),"most-recent"!==this.options.sortBy)switch(h="random"===this.options.sortBy?["","random"]:this.options.sortBy.split("-"),l="least"===h[0]?!0:!1,h[1]){case"random":t.data.sort(function(){return.5-Math.random()});break;case"recent":t.data=this._sortBy(t.data,"created_time",l);break;case"liked":t.data=this._sortBy(t.data,"likes.count",l);break;case"commented":t.data=this._sortBy(t.data,"comments.count",l);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}if("undefined"!=typeof document&&null!==document&&this.options.mock===!1){if(document.getElementById(this.options.target).innerHTML="",a=t.data,a.length>this.options.limit&&(a=a.slice(0,this.options.limit+1||9e9)),null!=this.options.template&&"string"==typeof this.options.template){for(n="",r="",u=0,f=a.length;f>u;u++)s=a[u],r=this._makeTemplate(this.options.template,{model:s,id:s.id,link:s.link,image:s.images[this.options.resolution].url,caption:this._getObjectProperty(s,"caption.text"),likes:s.likes.count,comments:s.comments.count,location:this._getObjectProperty(s,"location.name")}),n+=r;document.getElementById(this.options.target).innerHTML=n}else{for(o=document.createDocumentFragment(),d=0,m=a.length;m>d;d++)s=a[d],c=document.createElement("img"),c.src=s.images[this.options.resolution].url,this.options.links===!0?(e=document.createElement("a"),e.href=s.link,e.appendChild(c),o.appendChild(e)):o.appendChild(c);document.getElementById(this.options.target).appendChild(o)}i=document.getElementsByTagName("head")[0],i.removeChild(document.getElementById("instafeed-fetcher")),p="instafeedCache"+this.unique,window[p]=void 0;try{delete window[p]}catch(g){}}return null!=this.options.after&&"function"==typeof this.options.after&&this.options.after.call(this),!0},t.prototype._buildUrl=function(){var t,e,o;switch(t="https://api.instagram.com/v1",this.options.get){case"popular":e="media/popular";break;case"tagged":if("string"!=typeof this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");e="tags/"+this.options.tagName+"/media/recent";break;case"location":if("number"!=typeof this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");e="locations/"+this.options.locationId+"/media/recent";break;case"user":if("number"!=typeof this.options.userId)throw new Error("No user specified. Use the 'userId' option.");if("string"!=typeof this.options.accessToken)throw new Error("No access token. Use the 'accessToken' option.");e="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return o=""+t+"/"+e,o+=null!=this.options.accessToken?"?access_token="+this.options.accessToken:"?client_id="+this.options.clientId,o+="&count="+this.options.limit,o+="&callback=instafeedCache"+this.unique+".parse"},t.prototype._genKey=function(){var t;return t=function(){return(0|65536*(1+Math.random())).toString(16).substring(1)},""+t()+t()+t()+t()},t.prototype._makeTemplate=function(t,e){var o,i,n,s,r;for(i=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,o=t;i.test(o);)n=o.match(i)[1],s=null!=(r=this._getObjectProperty(e,n))?r:"",o=o.replace(i,""+s);return o},t.prototype._getObjectProperty=function(t,e){var o,i;for(e=e.replace(/\[(\w+)\]/g,".$1"),i=e.split(".");i.length;){if(o=i.shift(),!(null!=t&&o in t))return null;t=t[o]}return t},t.prototype._sortBy=function(t,e,o){var i;return i=function(t,i){var n,s;return n=this._getObjectProperty(t,e),s=this._getObjectProperty(i,e),o?n>s?1:-1:s>n?1:-1},t.sort(i.bind(this)),t},t}(),e="undefined"!=typeof exports&&null!==exports?exports:window,e.Instafeed=t}.call(this);