/**
 * Created by luqingying on 2018/2/7.
 */
function loginname(name) {
    var title = document.getElementById("login").getElementsByTagName("h1")[0];
    if(name == "yh")
        title.innerHTML = "用户登录";
    else if(name == "zyz")
        title.innerHTML = "志愿者登录";
    else if(name == "gzry")
        title.innerHTML = "工作人员登录";
}
function registername(name) {
    var registertitle = document.getElementById("register").getElementsByTagName("h1")[0];
    if(name == "yh")
        registertitle.innerHTML = "用户注册";
    else if(name == "zyz")
        registertitle.innerHTML = "志愿者注册";
}