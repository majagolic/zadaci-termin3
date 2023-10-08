/*  Zadatak 2
Napisati funkciju koja za dva unesena stringa formira i ispisuje novi string koji se sastoji od dva puta ponovljena prva tri karaktera iz prvog stringa i poslednja tri karaktera drugog stringa.

Primer izvršavanja programa:
prvi string: abcdef
drugi string: ghijkl
abcabcjkl*/

function spojiStringove(par1, par2) {
    var z = par1.substring(0, 3);
    var z2 = par2.substring(par2.length - 3);

    var z3 = z + z + z2;
    document.write(z3);
}

// Drugi nacin 
function spojiStringove2(par1, par2) {
    var z = par1.substring(0, 3);
    var z2 = par2.substring(par2.length - 3);

    var array = [];
    for (var i = 0; i < 2; i++) {
        array[i] = z;
    }

    //["abc", "abc"]
    var result = array.join('');
    var z3 = result + z2;
    return z3;
}

var z3 = spojiStringove2("abcdef", "ghijkl");
document.write(z3 + "<br>");
