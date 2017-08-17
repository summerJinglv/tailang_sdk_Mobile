/*获取URL指定参数  */
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r != null){
        return r[2];
    }
}
/* 获取URL所有参数 */
function getURLRs(r){
    var rs = r.split("?");
    if(rs.length > 1){
        rs = rs[1];
    }else{
        rs = "";
    }
    return rs; 
}
function openPage(url){//跳转到指定页面
	window.location.href=url+"?"+getURLRs(window.location.href);
}
function openPageEnter(url,enter){//跳转带入口参数enter——>页面或者APP
	window.location.href=url+'?enter='+enter+"&"+getURLRs(window.location.href);
}

$("#closeActivity,#returnHeader").click(function(){//头部关闭及返回按钮点击事件
	if(GetQueryString("appType")=="android"){
		window.sdk.closeActivity();
	}else if(GetQueryString("appType")=="ios"){
		if(GetQueryString("iosPayIn")=="1"){
			location.href = "jfsdk://iosPayOut"
		}else{
			location.href= "jfsdk://closeView";
		}
	}
})

$("#serverCenter").click(function(){//客服中心&联系客服点击事件
	openPageEnter("serviceCenter.html","web");
})

$("#costRecord").click(function(){//消费记录
	openPageEnter("costRecord.html","web");
})

$("#setPayPwd").click(function(){//设置支付密码
	openPageEnter("setPayPwd.html","web");
})

function headerReturn(){//是否从web进入,然后区分ios，安卓
	if(GetQueryString("enter")=="web"){
		mui.back();
	}else{
		if(GetQueryString("appType")=="android"){
			window.sdk.closeActivity();
		}else if(GetQueryString("appType")=="ios"){
			if(GetQueryString("iosPayIn")=="1"){
				location.href = "jfsdk://iosPayOut"
			}else{
				location.href= "jfsdk://closeView";
			}
		}
	}
}