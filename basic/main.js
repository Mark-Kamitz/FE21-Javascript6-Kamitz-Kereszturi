//Basic

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

// console.log(sandwiches);


var jSandw = JSON.parse(sandwiches);
var jFries = JSON.parse(fries);

document.getElementById("output").innerHTML = `My favorite sandwich is a ${jSandw.sandwich} wich has approximately ${jSandw.calories} calories, along with it I enjoy eating ${jFries.fries_size} with have about ${jFries.calories} calories`;

