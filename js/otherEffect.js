/**
 * Created by Ngoc on 3/8/2017.
 */
var price;
function showAddToCart(x){
    var arr=x.getElementsByTagName("p");
    arr[2].style.display="none";
    arr[3].style.display="block";
    x.style.cursor="pointer";
}
function showPrice(x) {
    var arr=x.getElementsByTagName("p");
    arr[2].style.display="block";
    arr[3].style.display="none";
}
function navHome() {
    diskEffect();
    navigationChange();
}
function navigationChange() {
    if (innerWidth <= 800 && document.getElementById("icmenu").className == "change")
        return;

    var headHeight=document.getElementById("header");
    if (headHeight == null)
        headHeight = 0;
    else
        headHeight = headHeight.offsetHeight;
    var icshopping, submenu;
    var y=window.pageYOffset;
    var nav=document.getElementById("navigation");
    var logo=document.getElementById("logo");
    if (y >= headHeight - 50){
        nav.style.backgroundColor="white";
        nav.style.color="#000";
        logo.style.backgroundImage="url('img/logo_b.png')";
        var icshopping=document.getElementById("icshopping");
        if (icshopping!=null) {
            icshopping.src = "img/ic_shopping_b.png";
            submenu=document.getElementById("submenu");
            submenu.style.color="#000";
            submenu.style.backgroundColor="#fff";
        }
        var icmenu = document.getElementById("icmenu");
        var bar = icmenu.getElementsByTagName("div");
        for (i = 0; i < bar.length; i++ )
            bar[i].style.backgroundColor ="#000";
    }else{
        nav.style.backgroundColor="transparent";
        nav.style.color="#fff";
        logo.style.backgroundImage="url('img/logo.png')";
        icshopping=document.getElementById("icshopping");
        if (icshopping!=null) {
            icshopping.src = "img/ic_shopping_w.png";
            submenu = document.getElementById("submenu");
            submenu.style.color = "#fff";
            submenu.style.backgroundColor="transparent";

        }
        var icmenu = document.getElementById("icmenu");
        var bar = icmenu.getElementsByTagName("div");
        for (i = 0; i < bar.length; i++ )
            bar[i].style.backgroundColor ="#fff";
    }

}

function createBullet() {
    var tagDiv=document.getElementById("disk");
    if (tagDiv == null)
        return;
    var content=document.getElementById("content");
    var arrParllax=document.getElementsByClassName("parallax");
    for (var i = 0; i <= arrParllax.length; i++){
        var bullet=document.createElement("div");
        bullet.className="bullet";
        tagDiv.appendChild(bullet);
    }
    
}

function diskEffect() {
    var content=document.getElementById("content");
    var arrParllax=document.getElementsByClassName("parallax");
    var listDisk=document.getElementById("disk");
    var arrDisk=listDisk.getElementsByClassName("bullet");
    var listHeight = new Array();
    listHeight[0] = 0;
    for (var i = 1; i <= arrParllax.length; i++)
        listHeight[i] = arrParllax[i-1].offsetTop - 400;
    listHeight[arrParllax.length+1]=5000;
    var y=window.pageYOffset;

    for (var i = 0; i < listHeight.length-1; i++){

        if (y >= listHeight[i] && y < listHeight[i + 1]){
            arrDisk[i].style.backgroundColor="#c59d5f";
            arrDisk[i].style.transition="all 0.3s"
        }
        else{
            arrDisk[i].style.backgroundColor="transparent";
            arrDisk[i].style.transition="all 0.3s";
        }
    }
}

function findATable() {
    var cal = document.getElementById("cal");
    var time = document.getElementById("time");
    var user = document.getElementById("user");
    var phone = document.getElementById("phone");
    if (cal.value == ""){
        alert("You must choose date to make reservation");
        cal.focus();
        return;
    }
    if (time.value == ""){
        alert("You must set time to make reservation");
        time.focus();
        return;
    }
    if (time.value < time.min || time.value > time.max){
        alert("The restaurant open from 11AM - 9PM");
        time.focus();
        return;
    }
    if (cal.value < cal.min){
        alert("Date invalid. Can't make reservation at " + cal.value);
        cal.focus();
        return;
    }
    if (phone.value.length <9 || phone.value.length > 11
        || phone.value.indexOf('-') == null ){
        alert("Phone invalid. Try again!");
        phone.focus();
        return;
    }
    var anounce = document.getElementById("anounce");
    anounce.innerHTML = "";
    var content = "<p>Thanks for your booking on our restaurant" +
        " <br>" +
        "You made a reservation on "+cal.value+"<br>" +
        "At "+time.value+" - a table for "+user.value+"<br>" +
        "We will call you later to check again. Thank you very much </p>";
    anounce.innerHTML = content;
    anounce.style.display = "block";
    phone.value = "";

    setTimeout(function () {
        anounce.style.display = "none";
    }, 5000);

}

