var side,timer,scrollTop,h;window.onscroll=function(){side=$("#abnner");var e=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;scrollTop=$(document).scrollTop();e=$(".about_content").height()-e;side.height()>e?(side.removeClass("about_banner1"),side.addClass("about_banner2")):80<scrollTop?(side.removeClass("about_banner2"),side.addClass("about_banner1")):side.removeClass("about_banner1")};$(function(){newsSearch(0,5)});
function newsSearch(e,f){$.ajax({type:"post",url:"/news/query",data:{start:e,size:f},dataType:"json",success:function(g,l){var c=g.newsList,k=g.count,a=[];if(void 0!=c&&0<c.length)for(var d=0;d<c.length;d++){a[a.length]='<li class="evel_news">';a[a.length]='<div class="title_news">';a[a.length]='<div class="title">'+c[d].title+"</div>";a[a.length]='<div class="infor">';a[a.length]='<span class="name">'+c[d].source+"</span>";a[a.length]="<span>"+c[d].date.substring(0,10)+"</span>";a[a.length]="</div>";
a[a.length]="</div>";a[a.length]='<div class="content">';a[a.length]='<div class="lead">'+c[d].summary+"</div>";var b="";switch(c[d].source){case "\u4eac\u534e\u65f6\u62a5":b="jinghua";break;case "\u5317\u4eac\u6668\u62a5":b="beichen";break;case "36Kr":b="Kr";break;case "\u8d22\u65b0\u7f51":b="caixin";break;case "\u4e2d\u56fd\u65b0\u95fb\u7f51":b="xinwen";break;case "\u548c\u8baf":b="hexun";break;case "\u51e4\u51f0\u8d22\u7ecf":b="fenghuang";break;case "\u65b0\u6d6a\u7f51":b="xinlang";break;case "\u65b0\u534e\u7f51":b=
"xinhua";break;case "\u4eba\u6c11\u7f51":b="renmin";break;case "\u7f51\u6613\u8d22\u7ecf":b="wangyi";break;case "\u817e\u8baf\u8d22\u7ecf":b="tengxun";break;case "\u4e1c\u65b9\u8d22\u5bcc\u7f51":b="caifu";break;case "\u91d1\u878d\u754c":b="jinrong";break;case "\u521b\u4e1a\u90a6":b="chuangye";break;case "\u7b2c\u4e00\u8d22\u7ecf":b="dicai";break;case "\u8bc1\u5238\u65f6\u62a5":b="zhengquan";break;case "\u754c\u9762\u65b0\u95fb":b="jiemian";break;case "\u8d22\u7ecf\u7f51":b="caijing";break;case "\u5317\u9752\u7f51":b=
"beiqing";break;case "\u4e2d\u91d1\u5728\u7ebf":b="zhongjin";break;case "21CN":b="CN";break;case "\u5149\u660e\u7f51":b="guangming";break;case "\u6bcf\u65e5\u8d22\u7ecf\u7f51":b="mrcjw";break;case "\u4e2d\u56fd\u4f01\u4e1a\u7f51":b="zgqyw";break;case "\u798f\u5e03\u65af":b="fbs";break;case "\u4e2d\u534e\u7f51":b="zhonghua";break;case "\u73af\u7403\u7f51":b="huanqiu";break;case "i\u9ed1\u9a6c\u7f51":b="iheima"}a[a.length]='<div class="logo '+b+'"></div>';a[a.length]='<div style="clear:both"></div>';
a[a.length]="</div>";void 0!=c[d].webUrl&&0>c[d].webUrl.indexOf("http")&&(c[d].webUrl="http://"+c[d].webUrl);a[a.length]='<a href="'+c[d].webUrl+'" target="_blank">';a[a.length]="<span>\u67e5\u770b\u8be6\u60c5</span>";a[a.length]='<div class="right_banner"></div>';a[a.length]="</a>"}$(".news").html(a.join(""));12<k&&$(".page").html(page(e,f,k,c.length,"newsSearch"))}})};
