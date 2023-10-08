/*Zadatak 5:
U datoj strukturi se nalazi lista drzava sa svojim kodovima. U drugoj strukturi se nalaze gradovi sa kodovima odredjene drzave.
Ispisati sve gradove i na osnovu koda drzave ispisati i njeno skraceno ime.
Npr: Novi Sad - RS, London - UK, Madrid - ESP

var drzave = { 1 : "RS" , 2 : "RU" , 3 : "UK", 4 : "ESP" };
var gradovi = [ ["London", 3], ["Novi Sad", 1], ["Moskva", 2], ["Madrid", 4]];*/


var drzave = { 1 : "RS" , 2 : "RU" , 3 : "UK", 4 : "ESP" };
var gradovi = [ ["London", 3], ["Novi Sad", 1], ["Moskva", 2], ["Madrid", 4]];

for (var i in gradovi) {
	var grad = gradovi[i];
	var drzava = drzave[grad[1]];
	document.write(grad[0] + " - " + drzava + "<br>");
}