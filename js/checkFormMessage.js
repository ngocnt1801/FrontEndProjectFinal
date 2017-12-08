/**
 * Created by Ngoc on 3/13/2017.
 */
function sendMessage() {
    var n = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    var e = /(\w)+@[a-zA-Z]+[.][a-zA-Z]+([.][a-zA-Z]+)?$/;
    var fName = document.getElementById("firstname");
    var lName = document.getElementById("lastname");
    var email = document.getElementById("email");
    var content = document.getElementById("messsage");
    
    if (n.test(fName.value) == false){
        alert("First name invalid");
        fName.focus();
        return false;
    }
    if (n.test(lName.value) == false){
        alert("Last name invalid");
        lName.focus();
        return false;
    }
    if (e.test(email.value) == false){
        alert("Email invalid");
        email.focus();
        return false;
    }
    if (content.value.length < 20){
        alert("Message must have at leat 20 character");
        content.focus();
        return false;
    }
    alert("Send successfully");

    return true;
}

function checkFormOder() {

    var n = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    var e = /(\w)+@[a-zA-Z]+[.][a-zA-Z]+([.][a-zA-Z]+)?$/;
    var p = /^[0-9]{9,11}$/;
    var fName = document.getElementById("firstname");
    var lName = document.getElementById("lastname");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var adress = document.getElementById("address");
    var city = document.getElementById("city");
    var company = document.getElementById("company");
    if (n.test(fName.value) == false) {
        alert("First Name invalid");
        fName.focus();
        // fName.value="";
        return false;
    }
    if (n.test(lName.value) == false) {
        alert("Last Name invalid");
        lName.focus();
        // lName.value="";
        return false;
    }
    if (e.test(email.value) == false) {
        alert("Email invalid");
        email.focus();
        return false;
    }
    if (p.test(phone.value) == false) {
        alert("Phone invalid");
        phone.focus();
        return false;
    }
    if (adress.value.length < 1) {
        alert("Address can't be empty");
        adress.focus();
        return false;
    }
    if (city.value.length < 1) {
        alert("City can't be empty");
        city.focus();
        return false;
    }
    var amountToTest = window.localStorage.getItem("amountToTest");
    amountToTest = parseInt(amountToTest);
    var amount = window.localStorage.getItem("amount");
    amount = parseInt(amount);
    if (amountToTest != amount) {
        alert("Your cart has just changed. Please check!");
        window.location.reload();

        return false;
    }
    window.location.replace("orderReceived.html");
    return true;
}