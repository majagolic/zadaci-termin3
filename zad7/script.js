/*Zadatak 7:
Napisati funkciju koja prima datu strukturu:
var korisnici = ["marko:17", "nikola:28", "pera:23", "nenad:15"];

Funkcija treba da prodje kroz zadati niz i da ispise da li je osoba punoletna ili ne.
Primer izvrsavanja:
Marko - Ne
Nikola - Da
Pera - Da
Nenad - Ne */

function proveriDaLiJePunoletan(korisnici){

    for(var i in korisnici){
        var korisnik = korisnici[i];
        var punoletan = "ne";
        if(korisnik.split(":")[1] > 17){
            punoletan = "da";
        }
        console.log(korisnik.split(":")[0] + " - " + punoletan);
    }
}
proveriDaLiJePunoletan(["marko:17", "nikola:28", "pera:23", "nenad:15"]);