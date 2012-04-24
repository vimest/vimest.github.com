$(document).ready(function() {
	$("#addFav").click(function() {
		var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != - 1 ? 'Command/Cmd': 'CTRL';
		if (document.all) {
			window.external.addFavorite(location.href, document.title)
		} else if (window.sidebar) {
			window.sidebar.addPanel(document.title, location.href, "")
		} else {
			alert('添加失败\n您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~')
		}
	});
	$("#setHome").click(function() {
		if (document.all) {
			document.body.style.behavior = 'url(#default#homepage)';
			document.body.setHomePage(document.URL);
		} else {
			alert("设置首页失败，请手动设置！");
		}
	})
});
