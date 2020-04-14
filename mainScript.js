/*
* Programmer : Dr.-Ing. Bader Juma
* Date       : August 14, 2019
* File       : mainScript.css
* Purpose    : external file that contain main function of javascript
*/


function myFunction(arr) {
    var text = "";
    var arrTable = [];
    var i, j;

text = '<tr>';
text += '<th class="engCol">English</th>';
text += '<th class="arbCol">عربي</th>'; 
text += '<th class="feyCol">فيلي</th>'; 
text += '<th class="farCol">فارسي</th>'; 
text += '</tr>';
     arr.sort(); //the new change April 14, 2020
    for(i = 0; i<arr.length; i++) {
        text += '<tr>';
        text += '<td class="engCol">' + arr[i].english + '</td><td class="arbCol">' + arr[i].arabic + '</td><td class="feyCol">' + arr[i].feyli + '</td><td class="farCol">' + arr[i].farsi + '</td>';
        text  += '</tr>';
    }
    
   
    document.getElementById("id01").innerHTML = text;
    document.getElementById("noWord").innerHTML = arr.length+1;
}
