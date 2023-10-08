/*Zadatak 4:
Data je struktura:

var ocene = [8, 7, 6, 9, 8, 10, 8];
var ime_prez = ["Marko", "Markovic"];

Napraviti funkciju koja prima dva parametra, prvi je niz ocena, drugi sadrzi ime i prezime.
Funkcija treba da izracuna prosek ocena datog studenta i da ispise njegovo ime i prezime.
Npr: "Student Marko Markovic ima prosek 8.7..."*/



function student(oc, podaci) {
	var suma = 0;
	// duzinu niza putem length atributa
	var duzina_niza = oc.length;
	for (var i = 0; i < oc.length; i++) {
		suma += oc[i];
	}

	var srednja_vrednost = suma / duzina_niza;
	return "Student " + podaci[0] + " " + podaci[1] + ", sa prosekom " 
		+ srednja_vrednost;
}

var ocene = [8, 7, 6, 9, 8, 10, 8];
var ime_prez = ["Marko", "Markovic"];

var rez = student(ocene, ime_prez);
console.log(rez);