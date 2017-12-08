/**
 * Created by Ngoc on 3/4/2017.
 */
var tmpSrc;
function showSubMenu() {
    if (innerWidth <= 800)
        return;
    var subMenu=document.getElementById("submenu");
    subMenu.style.display="block";
    var icon=document.getElementById("icshopping");
    tmpSrc=icon.src;
    icon.src="img/ic_shopping_hover.png";
}
function  hideSubMenu() {
    if (innerWidth <= 800)
        return;
    var subMenu = document.getElementById("submenu");
    subMenu.style.display = "none";
    var icon = document.getElementById("icshopping");
    icon.src = tmpSrc;
}

function loadOrder() {
    beforeReservationEffect();
    setTimeout(secondLineEffect, 300);
    setTimeout(firstLineEffect, 600);
    setTimeout(symbolEffect,900);
    setTimeout(lineEffect, 1200);
    setTimeout(lastLineEffect2, 1500);
    initialize();
}

function loadHomeEffect() {
    beforeHomeEffect();
    createBullet();
    setTimeout(secondLineEffect, 300);
    setTimeout(firstLineEffect, 600);
    setTimeout(symbolEffect,900);
    setTimeout(hrEffect, 1200);
    setTimeout(lastLineEffect, 1500);
    initialize();
}
function loadReservationEffect() {
    initialize();
    beforeReservationEffect();
    createBullet();
    setTimeout(secondLineEffect, 300);
    setTimeout(firstLineEffect, 600);
    setTimeout(symbolEffect,900);
    setTimeout(lineEffect, 1200);
    setTimeout(lastLineEffect2, 1500);

    //set day for input calendar
    var today = new Date();
    var day = today.getFullYear() + "-0" + (today.getMonth() + 1) + "-" + (today.getDate()+1);
    var d = document.getElementById("cal");
    d.value = day;
    d.min = day;

    //update showing amount on menu
    initialize();
}
function loadMenuEffect() {
    createBullet();
    var secondline=document.getElementById("second-line");
    secondline.style.fontSize="55px";
    secondline.style.opacity=0;
    setTimeout(secondLineEffect, 300);
    initialize();
    
}

function loadContactEffect() {
    var secondline=document.getElementById("second-line");
    secondline.style.fontSize="55px";
    var firstline=document.getElementById("first-line");
    firstline.style.transform="translateY(50px)";
    beforeContactEffect();
    setTimeout(secondLineEffect,300);
    setTimeout(firstLineEffect,600);
    initialize();
    // showCart();
}

function loadCartEffect() {
    var secondline=document.getElementById("second-line");
    secondline.style.fontSize="55px";
    var firstline=document.getElementById("first-line");
    firstline.style.transform="translateY(50px)";
    beforeContactEffect();
    setTimeout(secondLineEffect,300);
    setTimeout(firstLineEffect,600);
    initialize();
    showCart();
}

function beforeContactEffect() {
    var secondline=document.getElementById("second-line");
    secondline.style.opacity = 0;
    var firstline=document.getElementById("first-line");
    firstline.style.opacity = 0;
}
function beforeHomeEffect() {
    var welcome=document.getElementById("welcome");
    var line=welcome.getElementsByTagName("p");
    var hr=welcome.getElementsByTagName("hr");
    var symbol=welcome.getElementsByTagName("span");
    for (var i = 0; i < line.length; i++)
        line[i].style.opacity=0;
    hr[0].style.opacity=0;
    hr[0].style.width="0%";
    hr[0].style.marginLeft="42%"
    hr[1].style.opacity=0;
    hr[1].style.width="0%";
    symbol[0].style.opacity=0;
    line[1].style.fontSize="55px";
    line[0].style.transform="translateY(50px)";
    line[2].style.transform="translateY(-30px)";
    line[3].style.transform="translateY(-30px)";
}
function beforeReservationEffect() {
    var welcome=document.getElementById("welcome");
    var line=welcome.getElementsByTagName("p");
    var leftline=document.getElementById("leftline");
    var rightline=document.getElementById("rightline");
    var symbol=document.getElementById("symbol");
    for (var i = 0; i < line.length; i++)
        line[i].style.opacity=0;

    line[1].style.fontSize="55px";
    line[0].style.transform="translateY(50px)";
    line[2].style.transform="translateY(-30px)";

    leftline.style.opacity=0;
    leftline.style.width=0;
    leftline.style.marginLeft="100%";

    rightline.style.opacity=0;
    rightline.style.width=0;
    rightline.style.marginRight="100%";

    symbol.style.opacity=0;

}
function firstLineEffect() {
    var firstline=document.getElementById("first-line");
    firstline.style.opacity=1;
    firstline.style.transform="translateY(0px)";
    firstline.style.transition="all 1s";

}
function secondLineEffect() {
    var secondline=document.getElementById("second-line");

    secondline.style.opacity=1;
    secondline.style.fontSize="45px";
    secondline.style.transition="all 1s";
}
function symbolEffect() {
    var welcome=document.getElementById("welcome");
    var symbol=welcome.getElementsByTagName("span");
    symbol[0].style.opacity=1;
    symbol[0].style.transition="all 1s";
}
function hrEffect() {
    var welcome=document.getElementById("welcome");
    var hr=welcome.getElementsByTagName("hr");
    hr[0].style.opacity=1;
    hr[0].style.width="42%";
    hr[0].style.marginLeft="0%";
    hr[1].style.opacity=1;
    hr[1].style.width="42%";
    hr[0].style.transition="all 1s";
    hr[1].style.transition="all 1s";

}
function lineEffect() {
    var leftline=document.getElementById("leftline");
    var rightline=document.getElementById("rightline");
    leftline.style.opacity=1;
    leftline.style.width="100%";
    leftline.style.marginLeft="0%";
    leftline.style.transition="all 1s";
    rightline.style.opacity=1;
    rightline.style.width="100%";
    rightline.style.marginRight="0%";
    rightline.style.transition="all 1s";
}
function lastLineEffect() {
    var thirdline=document.getElementById("third-line");
    var fourthline=document.getElementById("fourth-line");
    thirdline.style.opacity=1;
    thirdline.style.transform="translateY(0px)";
    thirdline.style.transition="all 1s";
    fourthline.style.opacity=1;
    fourthline.style.transform="translateY(0px)";
    fourthline.style.transition="all 1s";
}
function lastLineEffect2() {
    var thirdline=document.getElementById("third-line");
    thirdline.style.opacity=1;
    thirdline.style.transform="translateY(0px)";
    thirdline.style.transition="all 1s";

}

function navResposive() {
    var w = innerWidth;
    var x = document.getElementById("icmenu");
    var menu = document.getElementById("menuBar");
    if (w <= 800){
        var subMenu=document.getElementById("submenu");
        subMenu.style.display="block";
        var icshopping = document.getElementById("icshopping");
        icshopping.src = "img/ic_shopping_w.png";
        if (x.className == "change"){
            x.style.transform = "translateX("+(w*0.75)+"px)";
            x.style.transition = "none";

            var content = document.getElementById("content");
            var footer = document.getElementsByClassName("footer");
            content.style.opacity = 0.3;
            footer[0].style.opacity = 0.3;

        }else{
            menu.style.left = (-w * 0.75) + "px";
            menu.style.transition = "none";
        }
    }
    else{
        var subMenu=document.getElementById("submenu");
        subMenu.style.display="none";
        var content = document.getElementById("content");
        var footer = document.getElementsByClassName("footer");

        content.style.opacity = 1;
        footer[0].style.opacity = 1;
    }

}
function changeIcon(x) {
    var isShow = x.classList.toggle("change");
    var menu = document.getElementById('menuBar');
    if (isShow == true){
        var w = innerWidth * 0.75;
        menu.style.left = "0px";
        menu.style.transition = "all 0.2s";
        x.style.transform = "translateX("+w+"px)";
        x.style.transition = "all 0.2s";

        var content = document.getElementById("content");
        var footer = document.getElementsByClassName("footer");
        content.style.opacity = 0.3;
        footer[0].style.opacity = 0.3;

        var bar = x.getElementsByTagName("div");
        for (i = 0; i < bar.length; i++ )
            bar[i].style.backgroundColor ="#000";

        var submenu = document.getElementById("submenu");
        submenu.style.color = "#fff";

        var icshopping = document.getElementById("icshopping");
        icshopping.src = "img/ic_shopping_w.png";

    }else{
        var w = innerWidth * 0.75;
        menu.style.left = -w + "px";
        menu.style.transition = "all 0.2s";
        x.style.transform = "translateX(0px)";
        x.style.transition = "all 0.2s";
        var content = document.getElementById("content");
        var footer = document.getElementsByClassName("footer");
        content.style.opacity = 1;
        footer[0].style.opacity = 1;
        var color;
        var headHeight=document.getElementById("header");
        if (headHeight == null)
            return;
        var y=window.pageYOffset;
        if (y < headHeight.offsetHeight - 50)
            color = "#fff";
        else
            color = "#000";
        var bar = x.getElementsByTagName("div");
        for (i = 0; i < bar.length; i++ )
            bar[i].style.backgroundColor =color;
    }

}