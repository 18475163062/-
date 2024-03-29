/*
删除Cookie
*/
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

/*
设置Cookie
name：名称
value：值
time:
s20是代表20秒
h是指小时，如12小时则是：h12
d是天数，30天则：d30
*/
function setCookie(name, value, time) {
    var strsec = getsec(time);
    var exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;";
}


function getsec(str) {
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if (str2 == "s") {
        return str1 * 1000;
    }
    else if (str2 == "h") {
        return str1 * 60 * 60 * 1000;
    }
    else if (str2 == "d") {
        return str1 * 24 * 60 * 60 * 1000;
    }
}


//function getCookie(c_name) {
//    if (document.cookie.length > 0) {
//        c_start = document.cookie.indexOf(c_name + "=")
//        if (c_start != -1) {
//            c_start = c_start + c_name.length + 1
//            c_end = document.cookie.indexOf(";", c_start)
//            if (c_end == -1) c_end = document.cookie.length
//            return unescape(document.cookie.substring(c_start, c_end))
//        }
//    }
//    return ""
//}

/*
获取Cookie
*/
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}