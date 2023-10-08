/*Zadatak 3
Napisati program koji formira akronim za zadatu frazu. Akronim se sastoji od kapitalizovanih
prvih slova reči u frazi. Na primer RAM je akronim za frazu „random access memory“.

Primer izvršavanja programa:
fraza: random access memory
akronim za unetu frazu je: RAM*/

function akronimFja(parametar1) {
    var splitted = parametar1.split(" ");
    var akronim = "";

    for (var index in splitted) {
        // var n = splitted[index];
        // akronim += n[0];
        akronim += splitted[index][0];
    }



    return akronim.toUpperCase();
}
var x = akronimFja("random access memory");
document.write(x);