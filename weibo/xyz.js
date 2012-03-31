if (!String.prototype.trim) {
	String.prototype.trim = function() {
		return this.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, '');
	};
};
var xyz = {
	setAttr: function(elem, prop, val) {
		elem.setAttribute(prop, val);
	},
	getAttr: function(elem, prop) {
		return elem.getAttribute(prop);
	},
	setStyle: function(elem, prop, val) {
		elem.style[prop] = val;
	},
	show: function(elem) {
		xyz.setStyle(elem, 'display', 'block');
	},
	hide: function(elem) {
		xyz.setStyle(elem, 'display', 'none');
	},
	id: function(id) {
		return 'string' == typeof id ? document.getElementById(id) : id;
	},
	getElementsByClassName: function(className, context, tagName) {
		if (!className) return;
		var ret = [],
		ctx = context || document,
		tags = ctx.getElementsByTagName(tagName || '*');
		for (var i = 0, len = tags.length; i < len; i++) {
			if ( - 1 !== tags[i].className.indexOf(className)) ret.push(tags[i]);
		}
		return ret;
	},
	addClass: function(elem, className) {
		if (xyz.hasClass(elem, className)) return;
		var classNames = elem.className.split(' ');
		classNames.push(className);
		elem.className = classNames.join(' ').trim();
	},
	removeClass: function(elem, className) {
		elem.className = elem.className && (' ' + elem.className + ' ').replace(' ' + className + ' ', '').trim();
	},
	hasClass: function(elem, className) {
		return elem.className && (' ' + elem.className + ' ').replace(/[\n\t]/g).indexOf(' ' + className + ' ') > - 1;
	}
};
if (document.getElementsByClassName) {
	xyz.getElementsByClassName = function(className, context, tagName) {
		var ctx = context || document;
		return className && ctx.getElementsByClassName(className) || null;
	};
};

