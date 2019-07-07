function enterEvent(e,fun){
    var ev = document.all ? window.event : e;
    if(ev.keyCode == 13){
        if (fun) fun();
    }
}
function initLeftMenuSelectedItem(href) {
    var items = $("#left-menu ul li a");
    for (var i = 0; i < items.size(); i++) {
        if (items.eq(i).attr("href") == href) {
            items.eq(i).addClass("item-selected");
            break;
        }
    }
}
function initPage(item, data, func) {
    if (data != null && data.pages > 1) {
        item.show();
        item.pagination({
            current: data.page_num,
            pageCount: data.pages,
            count: 1,
            jump: false,
            coping: true,
            prevContent: '<',
            nextContent: '>',
            countAfter: 1,
            callback: function (api) {
                func(api.getCurrent());
            }
        });
    } else {
        item.hide();
    }
}
function initPopstate() {
    window.addEventListener("popstate", function(){
        var page_num = getQueryVariable("page_num");
        getList(page_num,true);
    }, false);
}
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) return pair[1];
    }
}
function pushListState(url,pageNum) {
    var json={time:new Date().getTime()};
    window.history.pushState(json,"",url+"?page_num=" + pageNum);
}
function val(val, defVal) {
    if (val == undefined) return defVal == undefined ? '' : defVal;
    return val;
}