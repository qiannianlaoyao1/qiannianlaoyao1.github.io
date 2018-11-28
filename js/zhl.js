function bind(func,that) {
    var args = [].slice(arguments);
    args.shift();
    args.shift();
    return function () {
        return func.apply(that,args);
    }
}
var getId = bind(document.getElementById,document);
var $header = getId("header");
var $top = getId("top");
var menu_dpf = getId("menu_dpf");
var close_dpf = getId("close_dpf");
var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
    // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断  
}

window.onresize = function () {

};

function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += ' ' + cName;
    }
}

function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    }
}

function gotoTop() {
    var timer = null;
    var isTop = true;
    $top.onclick = function () {
        timer = setInterval(function () {
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            var isSpeed = Math.floor(-t / 6);
            document.documentElement.scrollTop = document.body.scrollTop = t + isSpeed;
            isTop = true;
            if (t == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
}
window.onload = function () {
    gotoTop();
};


window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var cFix = "fixed";
    var cTop = "top";
    console.log(t);
    console.log(clientHeight);
    if (t < clientHeight) {
        addClass($top, cTop);
    } else {
        removeClass($top, cTop);
    }

    if (t > 0) {
        // if(!hasClass($header,cName)){
        //      	$header.className += " " + cName;
        //  	};
        addClass($header, cFix);
    }
    if (t <= 0) {
        // if(hasClass($header,cName)){
        //      $header.className =$header.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " );
        //       // replace方法是替换
        removeClass($header, cFix);
    }
};