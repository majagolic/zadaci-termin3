/*Zadatak 1:

Napisati funkciju koja prima par korisnicko ime lozinka u obliku:

korisnicko_ime|lozinka

funkcija treba da razdvoji korisnicko ime i lozinku po delimiteru ("|") i da doda u listu.
Pozvati funkciju za nekoliko razlicitih parova korisnicko ime i lozinka i zatim ih sve ispisati u obliku:

Korisnicko ime je : pera
lozinka je : peric

Korisnicko ime je : marko
Lozinka je : markovic

Napomena par korisnicko ime i lozinka cuvati u listi koja je element liste koja cuva sve parove korisnicko ime i lozinka.*/





var user_pass_list = [];

function addToList(parameter) {
	var p = parameter.split("|");
	user_pass_list.push(p);
}

addToList("pera|peric");
addToList("marko|markovic");

for (var index in user_pass_list) {
	var new_list = user_pass_list[index];
	document.write("Korisnicko ime je " + new_list[0] + "<br>");
	document.write("Lozinka je " + new_list[1]  + "<br>");
}


