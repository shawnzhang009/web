$(function(){function d(){if(0==$("#telInput").val().length)return $(".warn_tel .warn_border").html("\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"),$(".warn_tel").show(),!1;if(0==$("#picture_code").val().length)return $(".warn_yzm .warn_border").html("\u8bf7\u8f93\u5165\u56fe\u7247\u9a8c\u8bc1\u7801"),$(".warn_yzm").show(),!1;if("block"==$(".warn_tel").css("display"))return!1;b=60;$.ajax({type:"POST",url:"/user/piccode",data:{telephone:$("#telInput").val(),type:"1",authCodeType:"2",pictureCode:$("#picture_code").val()},
success:function(a){"0000"==a.code?($("#_yz").hide(),$("#busy").hide(),$("#steps_2").show(),$("#yuYinCode").unbind("click"),$("#yuYinCode").html("("+b+"\u79d2)"),$("#yuyinText").html("\u8bf7\u7559\u610f\u6765\u7535400-652-1111"),$("#yuYinCode").css("color","#a3a3a3"),$("#yuYinCode").css("text-decoration","none"),null!=$("#telInput").val&&$("#telInput").attr("disabled",!0),e=window.setInterval(function(){0==b?(window.clearInterval(e),$("#yuYinCode").bind("click",d),$("#yuYinCode").css("color","#bc6a00"),
$("#yuYinCode").css("text-decoration","underline"),$("#yuYinCode").html("\u8bed\u97f3\u9a8c\u8bc1\u7801")):(b--,$("#yuYinCode").html("("+b+"\u79d2)"),$("#yuyinText").html("\u8bf7\u7559\u610f\u6765\u7535400-652-1111"),$("#yuYinCode").css("color","#a3a3a3"),$("#yuYinCode").css("text-decoration","none"))},1E3)):"0021"==a.code?($("#telIcon").show(),$("#telIcon").removeClass("success"),$("#telIcon").addClass("warn"),$(".warn_tel").show(),$(".warn_tel .warn_border").html("\u624b\u673a\u53f7\u4e0d\u80fd\u4e3a\u7a7a")):
"0044"==a.code?($("#yzmIcon").show(),$("#yzmIcon").removeClass("success"),$("#yzmIcon").addClass("warn"),$(".warn_yzm .warn_border").html("\u56fe\u7247\u9a8c\u8bc1\u7801\u8f93\u5165\u6709\u8bef"),$(".warn_yzm").show(),$("#picCodeSpan").html('<img src="/user/createCode?t='+Math.random()+'" id="codeImg"/>'),$("#picture_code").val("")):"0043"==a.code&&$("#busy").show()}});return!1}$("[disabled=disabled]").css("backgroundColor","#fff");$(":input").val("");$("#telInput").attr("disabled",!1);$(":input").bind("keypress",
function(a){if(13==a.keyCode)return!1});$("#telInput").bind("keyup",function(){1==/\D/g.test(this.value)&&(this.value=this.value.replace(/\D/g,""));11<this.value.length&&(this.value=this.value.substring(0,11))}).bind("focus",function(){$("#telIcon").hide();$(".warn_tel").hide()}).bind("blur",function(){if(0==$("#telInput").val().length)return $(".warn_tel").show(),$(".warn_tel .warn_border").html("\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"),!1;if(11!=$("#telInput").val().length)return $("#telIcon").show(),
$("#telIcon").removeClass("success"),$("#telIcon").addClass("warn"),$(".warn_tel").show(),$(".warn_tel .warn_border").html("\u624b\u673a\u53f7\u7801\u8f93\u5165\u6709\u8bef"),!1;$.ajax({type:"post",url:"/user/hasRealInfo",data:{telephone:$("#telInput").val()},success:function(a){1==a.hasRealInfo?($(".realInfor").show(),$(".warn_tel").hide(),$("#telIcon").show(),$("#telIcon").addClass("success"),$("#pwdtips1").removeClass("warn_pwd_reset2"),$("#pwdtips1").addClass("warn_pwd_reset"),$("#pwdtips2").removeClass("warn_confirm_reset2"),
$("#pwdtips2").addClass("warn_confirm_reset")):($(".realInfor").hide(),$.ajax({type:"post",url:"/user/checkphonenum",data:{telephone:$("#telInput").val()},success:function(a){"0023"==a.code?($("#telIcon").show(),$("#telIcon").removeClass("success"),$("#telIcon").addClass("warn"),$(".warn_tel .warn_border").html("\u624b\u673a\u53f7\u7801\u4e0d\u5b58\u5728"),$(".warn_tel").show()):"0021"==a.code?($("#telIcon").show(),$("#telIcon").removeClass("success"),$("#telIcon").addClass("warn"),$(".warn_tel .warn_border").html("\u624b\u673a\u53f7\u7801\u8f93\u5165\u6709\u8bef"),
$(".warn_tel").show()):"0000"==a.code&&($(".warn_tel").hide(),$("#telIcon").show(),$("#telIcon").addClass("success"))}}))}})});$("#picture_code").bind("keyup",function(){1==/\D/g.test(this.value)&&(this.value=this.value.replace(/\D/g,""));4<this.value.length&&(this.value=this.value.substring(0,4))}).bind("focus",function(){$("#yzmIcon").hide();$(".warn_yzm").hide()}).bind("blur",function(){0==$("#picture_code").val().length&&($(".warn_yzm .warn_border").html("\u8bf7\u8f93\u5165\u56fe\u7247\u9a8c\u8bc1\u7801"),
$(".warn_yzm").show())});$("#codeInput").bind("focus",function(){$("#jymIcon").hide();$(".warn_jym").hide()}).bind("keyup",function(){1==/\D/g.test(this.value)&&(this.value=this.value.replace(/\D/g,""));6<this.value.length&&(this.value=this.value.substring(0,6))}).bind("blur",function(){var a=$(this).val().length;0==a?($(".warn_jym .warn_border").html("\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801"),$(".warn_jym").show()):6!=a?($("#jymIcon").show(),$("#jymIcon").removeClass("success"),$("#jymIcon").addClass("warn"),
$(".warn_jym .warn_border").html("\u77ed\u4fe1\u9a8c\u8bc1\u7801\u8f93\u5165\u6709\u8bef"),$(".warn_jym").show()):$(".warn_jym").hide()});$("#nameInput").bind("focus",function(){$("#nameIcon").hide();$(".warn_name").hide();$("#nameCardIcon").hide();$(".warn_name_card").hide()}).bind("blur",function(){0==$(this).val().length?($(".warn_name .warn_border").html("\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a"),$(".warn_name").show()):$(".warn_name").hide()});$("#IDInput").bind("focus",function(){$("#cardIcon").hide();
$(".warn_card").hide();$("#nameCardIcon").hide();$(".warn_name_card").hide()}).bind("keyup",function(){18<this.value.length&&(this.value=this.value.substring(0,18))}).bind("blur",function(){var a=/(^\d{18}$)|(^\d{17}(\d|X|x)$)/;0==$(this).val().length?($(".warn_card .warn_border").html("\u8eab\u4efd\u8bc1\u4e0d\u80fd\u4e3a\u7a7a"),$(".warn_card").show()):!1===a.test($(this).val())?($("#cardIcon").show(),$("#cardIcon").removeClass("success"),$("#cardIcon").addClass("warn"),$(".warn_card .warn_border").html("\u8eab\u4efd\u8bc1\u8f93\u5165\u4e0d\u5408\u6cd5"),
$(".warn_card").show()):$(".warn_card").hide()});$("#getPicCode").bind("click",function(){$("#picCodeSpan").html('<img src="/user/createCode?t='+Math.random()+'" id="codeImg"/>');$("#yzmIcon").hide();$(".warn_yzm").hide();$("#picture_code").val("");return!1});$("#passwordInput").bind("keyup",function(){20<this.value.length&&(this.value=this.value.substring(0,20))}).bind("focus",function(){$("#pswIcon").hide();$("#pwdtips1").hide()}).bind("blur",function(){var a=$(this).val().length;0==a?($("#pwdtips1 .warn_border").html("\u8bf7\u8f93\u5165\u5bc6\u7801"),
$("#pwdtips1").show()):20<a||8>a&&0!=a?($("#pswIcon").show(),$("#pswIcon").removeClass("success"),$("#pswIcon").addClass("warn"),$("#pwdtips1 .warn_border").html("\u957f\u5ea6\u4e3a8-20\u4e2a\u5b57\u7b26\u4e4b\u95f4"),$("#pwdtips1").show()):$("#pwdtips1").hide()});$("#repeatPassword").bind("keyup",function(){20<this.value.length&&(this.value=this.value.substring(0,20))}).bind("focus",function(){$("#confarmIcon").hide();$("#pwdtips2").hide()}).bind("blur",function(){var a=$("#passwordInput").val(),
b=$(this).val();0==b.length&&8<=a.length&&20>=a.length?($("#pwdtips2 .warn_border").html("\u8bf7\u8f93\u5165\u786e\u8ba4\u5bc6\u7801"),$("#pwdtips2").show()):a!=b&&0!=b.length?($("#confarmIcon").show(),$("#confarmIcon").removeClass("success"),$("#confarmIcon").addClass("warn"),$("#pwdtips2 .warn_border").html("\u4e24\u6b21\u5bc6\u7801\u4e0d\u4e00\u81f4"),$("#pwdtips2").show()):a==b&&0!=b.length&&$("#pwdtips2").hide()});$("#codeInput").bind("focus",function(){$("#codetips").hide()});var f,c=0;$("#getCode").bind("click",
function(){$("#getCode").addClass("code_get_click");if(0==$("#telInput").val().length)return $(".warn_tel .warn_border").html("\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801"),$(".warn_tel").show(),!1;if(0==$("#picture_code").val().length)return $(".warn_yzm .warn_border").html("\u8bf7\u8f93\u5165\u56fe\u7247\u9a8c\u8bc1\u7801"),$(".warn_yzm").show(),!1;if("block"==$(".warn_tel").css("display"))return!1;c=60;$.ajax({type:"POST",url:"/user/piccode",data:{telephone:$("#telInput").val(),type:"1",authCodeType:"1",
pictureCode:$("#picture_code").val()},success:function(a){"0000"==a.code?($("#_yz").hide(),$("#busy").hide(),$("#steps_2").show(),$("#getCode").attr("disabled","true"),$("#getCode").html(c+"s\u540e\u91cd\u65b0\u53d1\u9001"),$("#getCode").css("background","#f7f1e9"),$("#getCode").css("color","#867a6a"),null!=$("#telInput").val&&$("#telInput").attr("disabled",!0),f=window.setInterval(function(){0==c?(window.clearInterval(f),$("#getCode").removeAttr("disabled"),$("#getCode").css("background","#fe9711"),
$("#getCode").css("color","#fff"),$("#getCode").html("\u91cd\u65b0\u53d1\u9001")):(c--,$("#getCode").html("\u91cd\u65b0\u53d1\u9001("+c+")"),$("#getCode").css("background","#f7f1e9"),$("#getCode").css("color","#867a6a"))},1E3)):"0021"==a.code?($("#telIcon").show(),$("#telIcon").removeClass("success"),$("#telIcon").addClass("warn"),$(".warn_tel").show(),$(".warn_tel .warn_border").html("\u624b\u673a\u53f7\u4e0d\u80fd\u4e3a\u7a7a")):"0044"==a.code?($("#yzmIcon").show(),$("#yzmIcon").removeClass("success"),
$("#yzmIcon").addClass("warn"),$(".warn_yzm .warn_border").html("\u56fe\u7247\u9a8c\u8bc1\u7801\u8f93\u5165\u6709\u8bef"),$(".warn_yzm").show(),$("#picCodeSpan").html('<img src="/user/createCode?t='+Math.random()+'" id="codeImg"/>'),$("#picture_code").val("")):"0043"==a.code&&$("#busy").show()}});return!1});var e,b=0;$("#yuYinCode").bind("click",d);$("#submitButton").bind("click",function(){$("#submitButton").addClass("submit_click");if(""==$("#passwordInput").val()||20<$("#passwordInput").val().length||
8>$("#passwordInput").val().length)return $("#pswIcon").show(),$("#pswIcon").removeClass("success"),$("#pswIcon").addClass("warn"),$("#pwdtips1").show(),!1;if("none"!=$("#pwdtips2").css("display")||"none"!=$("#pwdtips1").css("display"))return!1;if(""==$("#telInput").val())return $("#telIcon").show(),$("#telIcon").removeClass("success"),$("#telIcon").addClass("warn"),$(".warn_tel").show(),$(".warn_tel .warn_border").html("\u624b\u673a\u53f7\u4e0d\u80fd\u4e3a\u7a7a"),!1;$.ajax({type:"POST",url:"/user/pwdRecovery",
data:{telephone:$("#telInput").val(),password:$("#passwordInput").val(),rePassword:$("#repeatPassword").val(),authCode:$("#codeInput").val(),realName:$("#nameInput").val(),idNumber:$("#IDInput").val()},success:function(a){"0000"==a.code?location.href="/user/pwdRecSuccess":"0041"==a.code?($("#jymIcon").show(),$("#jymIcon").removeClass("success"),$("#jymIcon").addClass("warn"),$(".warn_jym .warn_border").html(a.msg),$(".warn_jym").show()):"0021"==a.code?($("#cardIcon").show(),$("#cardIcon").removeClass("success"),
$("#cardIcon").addClass("warn"),$(".warn_card .warn_border").html("\u77ed\u4fe1\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a"),$(".warn_card").show()):"0040"==a.code?($("#nameCardIcon").show(),$("#nameCardIcon").removeClass("success"),$("#nameCardIcon").addClass("warn"),$(".warn_name_card .warn_border").html(a.msg),$(".warn_name_card").show()):"0067"==a.code?($("#pswIcon").show(),$("#pswIcon").removeClass("success"),$("#pswIcon").addClass("warn"),$("#pwdtips1 .warn_border").html(a.msg),$("#pwdtips1").show()):
"0066"==a.code?($("#pswIcon").show(),$("#pswIcon").removeClass("success"),$("#pswIcon").addClass("warn"),$("#pwdtips1 .warn_border").html(a.msg),$("#pwdtips1").show()):"0042"==a.code?($("#confarmIcon").show(),$("#confarmIcon").removeClass("success"),$("#confarmIcon").addClass("warn"),$("#pwdtips2 .warn_border").html(a.msg),$("#pwdtips2").show()):"0030"==a.code?$("#shockTips").show():($("#othertips").html(a.msg),$("#othertips").show())}});return!1})});
