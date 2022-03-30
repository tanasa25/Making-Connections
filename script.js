var request = document.querySelector("#request1");
var number = document.querySelector("#two-circle");
var num = 2;
var connect = document.querySelector("#plus-circle");
var num1 = 471;
function remove1() {
    request.remove();
    num--;
    number.innerText = num;
    num1++;
    connect.innerText = num1;
}


var request = document.querySelector("#request1");
var number = document.querySelector("#two-circle");
var num = 2;
function remove3() {
    request.remove();
    num--;
    number.innerText = num;
}


var request2 = document.querySelector("#request2");
var number = document.querySelector("#two-circle");
var num = 2;
var connect = document.querySelector("#plus-circle");
var num1 = 471;
function remove2() {
    request2.remove();
    num--;
    number.innerText = num;
    num1++;
    connect.innerText = num1;
}


var request2 = document.querySelector("#request2");
var number = document.querySelector("#two-circle");
var num = 2;
function remove4() {
    request2.remove();
    num--;
    number.innerText = num;
}


var user = document.querySelector(".profile h1");
function change() {
    user.innerText = "Billy Banks";
}