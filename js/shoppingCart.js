/**
 * Created by Ngoc on 3/11/2017.
 */

function initialize() {
    var orderNum = window.localStorage.getItem("orderNum");
    var amount = window.localStorage.getItem("amount");
    var total = window.localStorage.getItem("total");
    if (orderNum == null)
        window.localStorage.setItem("orderNum", 3564);
    if (amount == null || amount == "undefined"){
        window.localStorage.setItem("amount", 0);
        window.localStorage.setItem("total", 0);
    }
    else{
        total = parseFloat(total).toFixed(2);
        var showAmout = document.getElementById("showAmount");
        showAmout.innerHTML=amount;
        var cost=document.getElementById("cost");
        cost.innerHTML="&pound;"+total;
    }

}
function searchItem(productID) {
    var tmp = window.localStorage.getItem(productID);
    if (tmp == null)
        return false;
    return true;

}
function addItem(productID, x) {
    var amount = window.localStorage.getItem("amount");
    amount = parseInt(amount);
    var total = window.localStorage.getItem("total");
    total = parseFloat(total);
    if (!searchItem(productID)){
        var parent = x.parentNode;
        var image = parent.getElementsByTagName("img");
        var arrP = parent.getElementsByTagName("p");
        var title = arrP[0].innerHTML;
        var price = arrP[2].innerHTML;
        var quantity = 1;
        amount += quantity;
        total += quantity * parseFloat(price.slice(1, price.length));
        total = total.toFixed(2);
        window.localStorage.setItem(productID, title+","+price+","+image[0].src+","+quantity);
        window.localStorage.setItem("amount", amount);
        window.localStorage.setItem("total", total);
        updateShowing();
        
    }else{
        alert("You has buy this before. Check your cart!");
    }
}
function addItem2(productID, x) {
    var amount = window.localStorage.getItem("amount");
    amount = parseInt(amount);
    var total = window.localStorage.getItem("total");
    total = parseFloat(total);
    if (!searchItem(productID)){
        var parent = x.parentNode.parentNode;
        var image = parent.getElementsByTagName("img");
        var title = document.getElementById("line2").innerHTML;
        var price = document.getElementById("line4").innerHTML;
        var quantity = document.getElementById("amount").value;
        amount += parseInt(quantity);
        total += quantity * parseFloat(price.slice(1, price.length));
        total = total.toFixed(2);
        window.localStorage.setItem(productID, title+","+price+","+image[0].src+","+quantity);
        window.localStorage.setItem("amount", amount);
        window.localStorage.setItem("total", total);
        updateShowing();
    }else{
        alert("You has buy this before. Check your cart!");
    }
}
function updateAmount(productID, btn) {
    var input = document.getElementById("amount");
    if (input.value < 1 || input.value > 30 || parseInt(input.value) != input.value){
        alert("Amount can't be out of range [1..30] or be a float");
        input.value = 1;

    }
    else{

        if (aItem == null){
            addItem2(productID, btn);
            return;
        }
        var aItem = window.localStorage.getItem(productID).split(",");
        var amount = window.localStorage.getItem("amount");
        var total = window.localStorage.getItem("total");
        var quantity = parseInt(aItem[3]);
        amount = parseInt(amount) + parseInt(input.value);
        total = parseFloat(total);
        var price = parseFloat(aItem[1].slice(1, aItem[1].length));
        total = total + price * parseInt(input.value);
        total = total.toFixed(2);
        aItem[3] = parseInt(input.value) + quantity;
        window.localStorage.setItem("amount", amount);
        window.localStorage.setItem("total", total);
        window.localStorage.setItem(productID, aItem.join());
        updateShowing();
        alert("updated successfully");
    }
    
}
function updateShowing() {
    var amount = window.localStorage.getItem("amount");
    var total = window.localStorage.getItem("total");
    total = parseFloat(total).toFixed(2);
    var showAmount = document.getElementById("showAmount");
    showAmount.innerHTML=amount;
    var cost=document.getElementById("cost");
    cost.innerHTML="&pound;"+total;

}
function showCart() {
    var empty = document.getElementById("emptyProduct");
    var listItem = document.getElementById("listItem");
    var amount = window.localStorage.getItem("amount");
    if (amount == 0){
        empty.style.display="block";
        listItem.style.display="none";
        return;
    }
    empty.style.display="none";
    listItem.style.display="block";
    //large screen
    var tableL = document.getElementById("tableLarge");
    tableL.innerHTML="<tr>"+
        "<th></th>"+
        "<th>Product</th>"+
        "<th>Price</th>"+
        "<th>Quantity</th>"+
        "<th>Total</th>"+
        "<th></th>"+
        "</tr>";
    //small screen
    var tableS = document.getElementById("tbSmall");
    tableS.innerHTML="";
    for (var i = 1; i <= 6; i++){
        var item = window.localStorage.getItem(i);
        if (item != null){
            var arrP = item.split(",");
            var price = parseFloat(arrP[1].slice(1, arrP[1].length));
            var quantity = parseInt(arrP[3]);
            var cost = (price * quantity).toFixed(2);
            //large screen
            var row =
                "<tr>" +
                "<td><img src='"+arrP[2]+"' alt=''></td>" +
                "<td><span>"+arrP[0]+"</span></td>" +
                "<td>"+arrP[1]+"</td>" +
                "<td><input type='number' min='1' max='30' value='"+arrP[3]+"' class='amount' onchange='changeAmount("+i+",this)'></td>" +
                "<td>&pound;"+cost+"</td>" +
                "<td><span class='close' onclick='removeItem("+i+",this)'>x</span></td>" +
                "</tr>";
            tableL.innerHTML = tableL.innerHTML + row;
            //small screen
            var rowS ="<tr><td>"+
                "<table cellspacing='0' class='tableSmall'>"+
            "<tr>"+
            "<td colspan='2' align='center'><img src='"+arrP[2]+"'></td>"+
                "</tr>"+
                "<tr>"+
                "<td>Product</td>"+
                "<td>"+arrP[0]+"</td>"+
            "</tr>"+
            "<tr>"+
            "<td>Price</td>"+
            "<td>"+arrP[1]+"</td>"+
            "</tr>"+
            "<tr>"+
            "<td>Quantity</td>"+
            "<td><input type='number' min='1' max='30' value='"+arrP[3]+"' class='amount' onchange='changeAmount("+i+", this)'></td>"+
                "</tr>"+
                "<tr>"+
                "<td>Total</td>"+
                "<td>&pound;"+cost+"</td>"+
            "</tr>"+
            "<tr>"+
            "<td colspan='2' align='center'><span class='close' onclick='removeItem("+i+", this)'>x</span></td>"+
                "</tr>"+
                "</table>"
            "</td></tr>"
            tableS.innerHTML += rowS;

        }
    }





    var subcash = document.getElementById("subcash");
    var cash = document.getElementById("cash");
    var total = window.localStorage.getItem("total");
    subcash.innerHTML = "&pound;"+total;
    cash.innerHTML = "&pound;"+total;

}
function removeItem(productID) {
    var isYes = confirm("Would you like to remove this item?");
    if (isYes == true) {
        var item = window.localStorage.getItem(productID);
        window.localStorage.removeItem(productID);
        var arrP = item.split(",");
        var price = parseFloat(arrP[1].slice(1, arrP[1].length));
        var quantity = parseInt(arrP[3]);
        var amount = window.localStorage.getItem("amount");
        var total = window.localStorage.getItem("total");
        amount = parseInt(amount) - quantity;
        total = parseFloat(total) - quantity * price;
        total = total.toFixed(2);
        window.localStorage.setItem("amount", amount);
        window.localStorage.setItem("total", total);
        updateShowing();
        showCart();
    }

}

function changeAmount(productID, x) {
    if (x.value < 1 || x.value > 30 || parseInt(x.value) != x.value){
        alert("Amount can't out of range [1..30] or be a float");
        var arrP=window.localStorage.getItem(productID).split(",");
        x.value = arrP[3];
    }else{
        // alert("OK");
        var amount = window.localStorage.getItem("amount");
        var total = window.localStorage.getItem("total");
        total = parseFloat(total);
        var arrP=window.localStorage.getItem(productID).split(",");
        amount = parseInt(amount) - parseInt(arrP[3]) + parseInt(x.value);
        var price = parseFloat(arrP[1].slice(1, arrP[1].length));
        total = total - price * parseInt(arrP[3]);
        total = total + price * parseInt(x.value);
        total = total.toFixed(2);
        arrP[3] = x.value;
        window.localStorage.setItem(productID, arrP.join());
        window.localStorage.setItem("amount", amount);
        window.localStorage.setItem("total", total);
        updateShowing();
        showCart();
    }
}

function showProductOrder() {
    var yourOrder = document.getElementById("yourOrder");
    var amount = window.localStorage.getItem("amount");
    amount = parseInt(amount);
    var total = window.localStorage.getItem("total");
    total = parseFloat(total);
    var emptyPro = document.getElementById("emptyProduct");
    var hasPro = document.getElementById("hasProduct");
    if (amount == 0){
        emptyPro.style.display="block";
        hasPro.style.display="none";
        return;
    }
    emptyPro.style.display="none";
    hasPro.style.display="block";
    for (var i = 1; i <= 6; i++){
        var aItem = window.localStorage.getItem(i);
        if (aItem != null){
            var arrP = aItem.split(",");
            yourOrder.innerHTML += "<tr>"+
                "<td>"+arrP[0]+" × "+arrP[3]+"</td>"+
                "<td>&pound;"+(parseInt(arrP[3]) * parseFloat(arrP[1].slice(1, arrP[1].length)).toFixed(2)).toFixed(2)+"</td>"+
                "</tr>";
        }

    }
    yourOrder.innerHTML +=  "<tr>"+
        "<td><b>Subtotal</b></td>"+
        "<td><b>£"+total.toFixed(2)+"</b></td>"+
        "</tr>"+
        "<tr>"+
        "<td><b>Total</b></td>"+
        "<td><b>£"+total.toFixed(2)+"</b></td>"+
        "</tr>";

    window.localStorage.setItem("amountToTest", amount);
}

function orderFood() {
    var m = ['January','February','Match','April','May','June','July','August','September','October','November','December'];
    var bill = document.getElementById("bill");
    var total = window.localStorage.getItem("total");
    var orderNum = window.localStorage.getItem("orderNum");
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    bill.innerHTML += "<tr>"+
    "<td>"+orderNum+"</td>"+
    "<td>"+m[month]+", "+date+"th, "+year+"</td>"+
    "<td>&pound;"+total+"</td>"+
    "</tr>";
    orderNum++;
    window.localStorage.clear();
    window.localStorage.setItem("orderNum", orderNum);

}