var data = {
    name:"Ray",
    age:"18",
    phone:"18233989613"
};

// 将数据放入模板中
var res = template("template", data);
console.log(res);
// console.log(res.name);
// 将模板放入页面中
var o = res;
document.body.innerHTML = res;