/*! bgscroll 2014-11-06 */
function initScrollbg(){$(".js-scrollbg").each(function(){var a,b=$(this).offset().top,c=$(this).height(),d=$(this);$(window).scroll(function(){a=document.documentElement.scrollTop>document.body.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;var e=(a-b+$(window).height())/c*50;e>100?e=100:0>e&&(e=0),d.css("background-position-y",e+"%")})})}function coolcard(){setTimeout(function(){$("#coolcard").addClass("on")},500),$("#coolcard .bosscard").click(function(){$("#coolcard .bosscard").nextAll(".carditem").addClass("anim-goback"),setTimeout(function(){$("#coolcard .bosscard").nextAll(".carditem").removeClass("anim-goback")},700)})}$(function(){initScrollbg(),coolcard()});