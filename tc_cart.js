"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Omar Jordan
   Date:   05/02/2024
   
   Filename: tc_cart.js
	
*/
/* 10. running total for the cost */
var orderTotal = 0;

/* cartHTML */
var cartHTML = "<table>";
cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

/* for loop that loops through the item array (pg - 754)*/
for ( var i = 0; i < item.length; i++){
    cartHTML += "<tr>";
    cartHTML += "<td>" + "<img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    /*add the description  price and */
    cartHTML += "<td>" + itemDescription[i] + "</td>";
    cartHTML += "<td>$"+ itemPrice[i] + "</td>";
    cartHTML += "<td>" + itemQty[i] + "</td>";

/* declare itemCost */
var itemCost = itemPrice[i] * itemQty[i];
/* add the HTML code to the value of cartHTML */
cartHTML += "<td>$" + itemCost + "</td> <tr>";
/* add the value of itemcost to orderTotal */
orderTotal += itemCost;
}

/* 13 Add the following HTML code to the value of the cartHTML variable */
cartHTML += "<tr><td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal + "</td></tr>";
cartHTML += "</table>";

/* Apply the cartHTML value to the innerHTML of the div elemenet named cart */
document.getElementById("cart").innerHTML = cartHTML;

