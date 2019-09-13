/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : August 14, 2019
* File       : jqueryScript.css
* Purpose    : external file that contain jQuery function
*/

var engVar = false;
var arbVar = false;
var feyVar = false;
var farVar = false;


$(document).ready(function(){
  
  $(".engSwitch").click(function(){
    $(".engCol").toggle();
    $("#engId").empty();
    if (engVar == false)
    $("#engId").append("Show");
    else 
    $("#engId").append("Hide");
    engVar = !engVar; 
  });

  $(".arbSwitch").click(function(){
    $(".arbCol").toggle();
    $("#arbId").empty();
    if (arbVar == false)
    $("#arbId").append("Show");
    else 
    $("#arbId").append("Hide");
    arbVar = !arbVar; 
  });

  $(".feySwitch").click(function(){
    $(".feyCol").toggle();
    $("#feyId").empty();
    if (feyVar == false)
    $("#feyId").append("Show");
    else 
    $("#feyId").append("Hide");
    feyVar = !feyVar;  
  });

  $(".farSwitch").click(function(){
    $(".farCol").toggle();
    $("#farId").empty();
    if (farVar == false)
    $("#farId").append("Show");
    else 
    $("#farId").append("Hide");
    farVar = !farVar; 
  });

   }); 





