var xyz = {
	//for dom
	byId:function(i){
		return document.getElementById(i);
	},
	byClass:function(c,p,t){
		var r = [];
		var c = new RegExp('\\b'+c+'\\b');
		var t = t || '*';
		var e = (p || document).getElementsByTagName(t);
		for(var i = 0;i<e.length;i++){
			if(c.test(e[i].className)){
				r.push(e[i]);
			};
		};
		return r;
	},
	byTagName:function(t,p){
		return (p || document).getElementsByTagName(t);
	},
	first:function(o){
		return (o.firstElementChild || o.firstChild);
	},
	last:function(o){
		return (o.lastElementChild || o.lastChild);
	},
	next:function(o){
		return (o.nextElementSibling || o.nextSibling);
	},
	prev:function(o){
		return (o.previousElementSibling || o.previousSibling);
	},

	//for event
	bindEvent:function(o,t,cb){
		if(o.addEventListener){
			o.addEventListener(t,cb,false);
		}else if(o.attachEvent){
			o.attachEvent('on'+t,cb);
		}else{
			o['on'+t] = cb;
		};
	},
	removeEvent:function(o,t,cb){
		if(o.removeEventListener){
			o.removeEventListener(t,cb,false);
		}else if(o.detachEvent){
			o.detachEvent('on'+t,cb);
		}else{
			o['on'+t] = null;
		}
	},

	//for attr
	setAttr:function(o,n,v){
		o.setAttribute(n,v);
	},
	getAttr:function(o,n){
		return o.getAttribute(n);
	},
	removeAttr:function(o,n){
		o.removeAttribute(n);
	},

	//for cookie
	setCK:function(n,v,e){
		var d = new Date();
		d.setDate(d.getDate() + e);
		document.cookie = n+'='+v+';expires='+d;
	},
	getCK:function(n){
		var a = document.cookie.split('; ');
		for(var i=0;i<a.length;i++){
			var a2 = a[i].split('=');
			if(a2[0] === n){
				return a2[1];
			};
		};
		return null;
	},
	removeCK:function(n){
		this.setCK(n,false,-1);
	},

	//for ajax
	ajaxGet:function(u,cb){
		var ajax = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		ajax.open('GET',u,true);
		ajax.onreadystatechange = function(){
			if(ajax.readyState === 4 && ajax.status === 200){
				cb(ajax.responseText);
			};
		};
		ajax.send();
	},
	ajaxPost:function(){

	},

	//for tools
	u2str:function(a){
		var t = '';
		for(var i=0;i<a.length;i++){
			t += String.fromCharCode(a[i]);
		};
		return t;
	},
	str2u:function(s){
		var a = [];
		for(var i=0;i<s.length;i++){
			a.push(s.charCodeAt(i))
		}
		return a;
	}
};
