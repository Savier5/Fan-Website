"use strict";

test();
setInterval("test()", 500);

function test() {
   var orderTotal = 0;
   var price = 100;

   var taxes = document.getElementById("qty").value * 0.0775;
   var orderTotal = price * taxes + price * document.getElementById("qty").value;

   document.getElementById("orderTotal").innerHTML = orderTotal.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
