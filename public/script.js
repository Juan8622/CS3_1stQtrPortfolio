var age = window.prompt("Age", "0");
var maxAge = window.prompt("Max age", "0");
var numPerday = window.prompt("NumPerDay", "0");
var confirmation = window.confirm("Is your input correct");

var totalRequired = (numPerday * 365) * (maxAge - age);
var confirmation = window.confirm("is ts correct gang");
if (confirmation == true){

document.write(`you need ${totalRequired} snacks to last until u die at ${maxAge} ig`);

} else {
window.alert("run it back");

}