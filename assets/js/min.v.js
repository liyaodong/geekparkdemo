/*! bgscroll 2015-05-24 */
function initScrollbg(){$(".js-scrollbg").each(function(){var a,b=$(this).offset().top,c=$(this).height(),d=$(this);$(window).scroll(function(){a=document.documentElement.scrollTop>document.body.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;var e=(a-b+$(window).height())/c*50;e>100?e=100:0>e&&(e=0),d.css("background-position-y",e+"%")})})}function coolcard(){setTimeout(function(){$("#coolcard").addClass("on")},500),$("#coolcard .bosscard").click(function(){$("#coolcard .bosscard").nextAll(".carditem").each(function(){$(this).addClass("anim-goback"),$(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(a){$(this).removeClass("anim-goback")})})})}function whichTransitionEvent(){var a,b=document.createElement("fakeelement"),c={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in c)if(void 0!==b.style[a])return c[a]}$(function(){initScrollbg(),coolcard()});var transitionEvent=whichTransitionEvent();$(".button").click(function(){$(this).addClass("animate"),$(this).one(transitionEvent,function(a){})});