
$(document).ready(function () {

	$(window).scroll(function () {
		var scroTop = $(window).scrollTop();
		if (scroTop > 100) {
			$('#gototop').fadeIn(500);
		} else {
			$('#gototop').fadeOut(500);
		}
	});

	$('#gototop').click(function () {
		$("html,body").animate({ scrollTop: 0 }, "fast");
	});

});

var mobileHover = function () {
	$('*').on('touchstart', function () {
		$(this).trigger('hover');
	}).on('touchend', function () {
		$(this).trigger('hover');
	});
};


//pjax 刷新
$(document).pjax('a:not(a[target="_blank"], a[no-pjax])', {
	container: '#pjax-container',
	fragment: '#pjax-container',
	timeout: 8000
}).on('pjax:send',
	function () {
		$("#M").addClass("opacity-disappear");
	}).on('pjax:complete',
		function () {
			if (typeof Prism !== 'undefined') {
				Prism.highlightAll(true, null);
			}
			$("#M").addClass("opacity-show");
			$("#post img").each(function () {
				$(this).wrap(function () {
					if ($(this).is(".bq")) {
						return '';
					}
					return '<a data-fancybox="gallery" no-pjax data-type="image" href="' + $(this).attr("src") + '" class="light-link"></a>';
				})
			});

		}).on('pjax:click', function () { $('body,html').animate({ scrollTop: 0 }, 200); });

Smilies = {
	dom: function (id) {
		return document.getElementById(id);
	},
	grin: function (tag) {
		tag = ' ' + tag + ' ';
		myField = this.dom("textarea");
		document.selection ? (myField.focus(), sel = document.selection.createRange(), sel.text = tag, myField.focus()) : this.insertTag(tag);
	},
	insertTag: function (tag) {
		myField = Smilies.dom("textarea");
		myField.selectionStart || myField.selectionStart == "0" ? (startPos = myField.selectionStart, endPos = myField.selectionEnd, cursorPos = startPos, myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length), cursorPos += tag.length, myField.focus(), myField.selectionStart = cursorPos, myField.selectionEnd = cursorPos) : (myField.value += tag, myField.focus());
	}
}


function OwO_show() {
	if ($("#OwO-container").css("display") == 'none') {
		$("#OwO-container").slideDown();
	} else {
		$("#OwO-container").slideUp();
	}
}

/***
console.info(
	" %c made with ❤ by youranreus ",
	'color: #fadfa3; background: #030307; padding:5px 0;'
)
 */

var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "https://lvmoo.com/icons/onblur.ico");
		document.title = 'I Miss You ♥ | ' + OriginTitile;
		clearTimeout(titleTime);

	}
	else {
		$('[rel="icon"]').attr('href', "https://lvmoo.com/icons/favicon.ico");
		document.title = '(ฅ>ω<*ฅ) 欢迎回来~' + OriginTitile;
		titleTime = setTimeout(function () {
			document.title = OriginTitile;
		}, 2000);
	}
});


if (window.console) {
	//console.groupCollapsed('%c凯の秘密基地', 'color:#66ccff; font-size: 24px; font-weight: 300');
	console.groupCollapsed("%c ", "background: url(https://wwww.lvmoo.com/admin/img/typecho-logo.svg) no-repeat center;padding-left:110px;padding-bottom: 26px;");
	console.log('%c https://wwww.lvmoo.com \n ------------- \n 我的腿让我停下，可是心却不允许我那么做。', 'color:#66ccff');
	console.groupEnd();
}