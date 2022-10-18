"use strict";

// Creats 4 different arrays for each different value of each item.
var item = [1, 2, 3];
var itemName = ["2024 Mustang Ecoboost", "2024 Mustang GT", "2024 Mustang Dark Horse"];
var itemDescription = [
   "The EcoBoost model features the newest generation of the four-cylinder 2.3-liter turbocharged EcoBoost, making over 310 horsepower, and it is Ford's most powerful EcoBoost. The turbocharged EcoBoost allows for it to make great power with just simple bolt-ons. But it only comes with the 10-speed automatic transmission. This is a good efficient car making great power and an EPA-estimated over 21 mpg city and 32 mpg highway.",
   "The GT model features the newest generation of the Coyote 5.0-liter V-8, which makes 480 horsepower, but it is also Ford's most powerful GT. The engine features dual air intakes feeding to dual throttle bodies, making it breathe in more air than ever, and making more power. This also allows for it to make good power with just simple bolt-ons. It also has an option to be paired with a six-speed manual (Getrag transmission) or 10-speed automatic transmission.",
   "The all-new Dark Horse trim features many performance parts from the GT500 and the Mach 1, making the Dark Horse the most track-capable Mustang that doesn't have a Shelby badge. Not only does it feature the newest generation of the Coyote 5.0-liter V-8, which makes 500 horsepower, but it is also Ford's most powerful Mustang. The engine features dual air intakes feeding to dual throttle bodies, but in the Dark Horse, it is enhanced even more than the GT version. It also has an option to be paired with a standard Tremec six-speed manual or the famous 10-speed automatic.",
];
var itemPrice = [100, 200, 400];
var itemQty = [1, 1, 1];

// Creates and sets the order total to $0
var orderTotal = 0;

// Creats variable cartHTML and then sets the starting html code for creating a table.
var cartHTML = '<table span="8">';

// Adds each item in the cart as a html code to cartHTML variable using a for loop.
for (var i = 0; i < 3; i++) {
   cartHTML += "<tr><td colspan='3' rowspan='3'><img src='media/Pre-order/" + item[i] + ".jpg' alt=" + item[i] + " /></td><th colspan='2'>" + itemName[i] + "</th></tr>";
   cartHTML += "<tr class='itemDesc'><td colspan='2'>" + itemDescription[i] + "</td></tr>";
   cartHTML += "<tr><td colspan='2'><a href='orderForm" + item[i] + ".html'>Place Order</a></td></tr>";
}

// Adds the last html code to show the order total and end the table code.
cartHTML += "<tr></tr></table>";

// Adds all the html code from cartHTML to the div with the ID "cart".
document.getElementById("cart").innerHTML = cartHTML;
