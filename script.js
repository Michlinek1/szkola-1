const a = 1
const b = 2
const c = 4
const d = 8

document.getElementById("liczby").innerHTML="a="+a+"<br>b="+b+"<br>c="+c+"<br>d="+d
var zad1 = function(){
    if(b === 0  || typeof a !== 'number' || typeof b !== 'number'){
        document.getElementById("zad1").innerHTML ="blad";
    }
    document.getElementById("zad1").innerHTML ="a/b= "+ a/b
}


var zad2 = function(){
    if(b === 0  || d === 0 || typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') {
        document.getElementById("zad2").innerHTML ="blad";
    }
    document.getElementById("zad2").innerHTML ="a/b + c/d= "+ (a/b +c/d)
}


var zad3 = function(){
    if((b-4) === 0  || typeof a !== 'number' || typeof b !== 'number'){
        document.getElementById("zad3").innerHTML ="blad";
    }
    document.getElementById("zad3").innerHTML = "(a+6) / (b-4)= "+(a+6) / (b-4)
}
zad1()
zad2()
zad3()
