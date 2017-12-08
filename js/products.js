/**
 * Created by Ngoc on 3/9/2017.
 */
var titles=["JERK CHICKEN",
    "CHILLI CRAB",
    "AREPAS",
    "PIEROGI",
    "TOSTADAS",
    "CEVICHE"];
var prices=[14.95, 29.45, 4.95, 12.95, 19.95, 9.45];
var imgSrcs=['order1a.jpg', 'order2a.jpg', 'order3a.jpg', 'order4a.jpg', 'order5a.jpg', 'order6a.jpg'];
var description1=["When it comes to jerk chicken, there’s no beating the real deal fresh from a smoky jerk hut. Recipes are closely guarded secrets, but usually start with chicken on the bone slathered in a marinade of allspice, thyme, scotch bonnet chillies, ginger and spring onions. The meat is left overnight to absorb the flavours before being grilled over pimento wood.",
    "The quintessential Singaporean dish, chilli crab is served in numerous hawker centres throughout this small city-state. Its invention is credited to Cher Yam Tian, who began serving the spicy crustaceans from a street cart in the 1950s. The crabs are served whole, stir fried in a sweet and sour sauce of tomato, egg and (of course) chilli.",
    "These round corn cakes are a ubiquitous comida rápida in Colombia, where there are myriad regional specialities across the country. Arepas are much thicker than tortillas and will usually be grilled or baked before being stuffed or topped with cheese. Try them in Bogotá, where they’re particularly popular for breakfast.",
    "You’ll find versions of pierogi all over Eastern Europe, but Krakow is the only city we know of that has an entire festival dedicated to this handmade dumpling. Pierogi are made from a simple dough of flour, egg, water and salt, which is shaped into parcels and filled with meat, potatoes or cheese. They’re boiled first and then fried in butter.",
    "Unlike tacos, which are soft tortillas, tostadas are traditionally shaped into a small flat disc and fried until crisp. Toppings range from classic combinations like refried beans, guacamole, salsa and cheese to lighter seafood options like shrimp ceviche. Be prepared to get messy: a crunchy tostada doesn’t make for easy eating.",
    "Ceviche is seen by many as Peru’s national dish, and its popularity is also growing worldwide. The star ingredient is the very fresh raw fish, which is marinated in lime juice, salt and chilli. Try sea bass ceviche with sweet corn and sweet potatoes on the side, washed down with a pisco sour, of course."];
var description2=["An online shop evokes the physical analogy of buying products or services at a bricks-and-mortar retailer or shopping center; the process is called business-to-consumer (B2C) online shopping.<br><br>Retail success is no longer all about physical stores. This is evident because of the increase in retailers now offering online store interfaces for consumers. With the growth of online shopping, comes a wealth of new market footprint coverage opportunities for stores that can appropriately cater to offshore market demands and service requirements.",
    "An online shop evokes the physical analogy of buying products or services at a bricks-and-mortar retailer or shopping center; the process is called business-to-consumer (B2C) online shopping.<br><br>Retail success is no longer all about physical stores. This is evident because of the increase in retailers now offering online store interfaces for consumers. With the growth of online shopping, comes a wealth of new market footprint coverage opportunities for stores that can appropriately cater to offshore market demands and service requirements.",
    "An online shop evokes the physical analogy of buying products or services at a bricks-and-mortar retailer or shopping center; the process is called business-to-consumer (B2C) online shopping.<br><br>Retail success is no longer all about physical stores. This is evident because of the increase in retailers now offering online store interfaces for consumers. With the growth of online shopping, comes a wealth of new market footprint coverage opportunities for stores that can appropriately cater to offshore market demands and service requirements.",
    "An online shop evokes the physical analogy of buying products or services at a bricks-and-mortar retailer or shopping center; the process is called business-to-consumer (B2C) online shopping.<br><br>Retail success is no longer all about physical stores. This is evident because of the increase in retailers now offering online store interfaces for consumers. With the growth of online shopping, comes a wealth of new market footprint coverage opportunities for stores that can appropriately cater to offshore market demands and service requirements.",
    "An online shop evokes the physical analogy of buying products or services at a bricks-and-mortar retailer or shopping center; the process is called business-to-consumer (B2C) online shopping.<br><br>Retail success is no longer all about physical stores. This is evident because of the increase in retailers now offering online store interfaces for consumers. With the growth of online shopping, comes a wealth of new market footprint coverage opportunities for stores that can appropriately cater to offshore market demands and service requirements.",
    "An online shop evokes the physical analogy of buying products or services at a bricks-and-mortar retailer or shopping center; the process is called business-to-consumer (B2C) online shopping.<br><br>Retail success is no longer all about physical stores. This is evident because of the increase in retailers now offering online store interfaces for consumers. With the growth of online shopping, comes a wealth of new market footprint coverage opportunities for stores that can appropriately cater to offshore market demands and service requirements."];
function openDetailPage(index) {
    var productDetail = window.open("");
    var amount = window.localStorage.getItem("amount");
    var toal = window.localStorage.getItem("total");
    if (amount == null || amount == "undefined"){
        amount = 0;
        total = 0.00;
    }else{
        amount = parseInt(amount);
        toal = parseFloat(toal).toFixed(2);
    }


    productDetail.document.write(
        "<html>" +
        "<head>" +
        "<meta charset='UTF-8'>" +
        "<title>Rosa</title>" +
        "<link rel='stylesheet' href='css/index.css'>" +
        "<link rel='stylesheet' href='css/responsive.css'>" +
        "<link rel='stylesheet' href='css/productDetail.css'>" +
        " <link href='https://fonts.googleapis.com/css?family=Cabin' rel='stylesheet'>" +
        "<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet'>" +
        "<link href='https://fonts.googleapis.com/css?family=Herr+Von+Muellerhoff' rel='stylesheet'>" +
        "</head>" +
        "<script src='js/shoppingCart.js'></script>" +
        "<script src='js/products.js'></script>" +
        "<script src='js/headerEffect.js'></script>" +
        "<script src='js/otherEffect.js'></script>" +
        "<script >" +
            "function test() {  "+
            "var amount = window.localStorage.getItem('amount');"+
            "var total = window.localStorage.getItem('total');"+
            "total = parseFloat(total).toFixed(2);"+
            "var showAmount = document.getElementById('showAmount');"+
            "showAmount.innerHTML=amount;"+
            "var cost=document.getElementById('cost');"+
            "cost.innerHTML='&pound;'+total;" +
            "}"+
        "</script>" +
        "<body onresize='test()' onscroll='navigationChange()'>" +
        "<div class='nav' id='navigation'>"+
        "<div id='icmenu' onclick='changeIcon(this)'>"+
        "<div class='bar1'></div>"+
        "<div class='bar2'></div>"+
        "<div class='bar3'></div>"+
        "</div>"+
        "<div class='logo' id='logo'></div>"+
        "<div class='menu' id='menuBar'>"+
        "<ul>"+
        "<li><a href='home.html'>HOME</a></li>"+
        "<li><a href='reservation.html'>RESERVATION</a></li>"+
        "<li><a href='menu.html'>MENU</a></li>"+
        "<li><a href='order.html'>ORDER</a></li>"+
        "<li><a href='contact.html'>CONTACT</a></li>"+
        "<li onmouseover='showSubMenu()' onmouseout='hideSubMenu()'><a href='cart.html'><img src='img/ic_shopping_b.png' id='icshopping'></a>"+
        "<div id='showAmount'>0</div>"+
        "<div id='submenu'>"+
        "<ul>"+
        "<li id='cost'>£0.00</li>"+
        "<li><a href='cart.html'>View Cart</a></li>"+
        "<li><a href='checkout.html'>Check Out</a></li>"+
        "</ul>"+

        "</div>"+

        "</li>"+
        "</ul>"+
        "</div>"+
        "</div>"+
        "<div id='content'>" +
        "<div id='top' class='col-10'>" +
        "<div id='image' class='col-6'>" +
        "<img src='img/" + imgSrcs[index - 1] + "' alt=''>" +
        "</div>" +
        "<div id='detail' class='col-6'>" +
        "<p id='line1'><span>ORDER &#8227</span>" + titles[index - 1] + "</p>" +
        "<p id='line2'>" + titles[index - 1] + "</p>" +
        "<p id='line4'>&pound;" + prices[index - 1] + "</p>" +
        "<p id='line5'>" + description1[index - 1] + "</p>" +
        "<input type='number' min='1' max='30' value='1' id='amount'>" +
        "<p id='line6' onclick='updateAmount("+index+", this)'>ADD TO CART</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='footer'>" +
        "<div class='footer_above'>" +
        "<p class='col-12'>ABOUT ROSA</p>" +
        "<p class='col-12 footer-symbol'>✻</p>" +
        "<p class='col-4'>ROSA is a restaurant, bar and coffee roastery located on a busy corner site in Farringdon’s Exmouth Market. With glazed frontage on two sides of the building, overlooking the market and a bustling London intersection.</p>" +
        "</div>" +
        "<div class='footer_below'>" +
        "<p>&copy; ROSA 2016 &nbsp;&nbsp; • &nbsp;&nbsp; 13 Hanway Square, London &nbsp;&nbsp; • &nbsp;&nbsp; Tel: 71494563 &nbsp;&nbsp; • &nbsp;&nbsp; Handcrafted with love by <span>PixelGrade</span> Team</p>" +
        "<p>PERMISSION AND COPYRIGHT &nbsp;&nbsp; • &nbsp;&nbsp;  CONTACT THE TEAM</p>" +
        "</div>" +
        "</div>" +
        "</body>" +
        "</html>");




}

