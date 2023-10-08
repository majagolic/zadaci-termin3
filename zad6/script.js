/*Zadatak 6:
Napisati funkciju koja treba da primi kao parametar niz koji sadrzi parove naziva korisnika i njihovih korisnickih uloga,
npr: "markec|admin", "godzz|webmaster", "nikola123|admin", "nennad|moderator"

U funkciji se kreira drugi niz, koji sadrzi samo korisnicke uloge i to vraca kao povratnu vrednost. Napomena: ne dodavati duplikate.*/


function izdvojUloge(korisnici){

    var uloge = [];

    for(var i in korisnici){
        var uloga = korisnici[i].split("|")[1];
        uloge.push(uloga);
    }
    return uloge;
}
var nizUloga = izdvojUloge(["markec|admin", "godzz|webmaster", "nikola123|admin", "nennad|moderator"]);
console.log(nizUloga);