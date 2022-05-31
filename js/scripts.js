var n1 = 0;
var n2 = 0;
var simb = "";

var tela = document.getElementById("visor");

function clicked(input){
    switch(input){
        case "0":
            n1 = n1*10;
            tela.innerHTML = n1;
            break;
        case "1":
            n1 = n1*10 + 1;
            tela.innerHTML = n1;
            break;
        case "2":
            n1 = n1*10 + 2;
            tela.innerHTML = n1;
            break;
        case "3":
            n1 = n1*10 + 3;
            tela.innerHTML = n1;
            break;
        case "4":
            n1 = n1*10 + 4;
            tela.innerHTML = n1;
            break;
        case "5":
            n1 = n1*10 + 5;
            tela.innerHTML = n1;
            break;
        case "6":
            n1 = n1*10 + 6;
            tela.innerHTML = n1;
            break;
        case "7":
            n1 = n1*10 + 7;
            tela.innerHTML = n1;
            break;
        case "8":
            n1 = n1*10 + 8;
            tela.innerHTML = n1;
            break;
        case "9":
            n1 = n1*10 + 9;
            tela.innerHTML = n1;
            break;
        case "+":
            n2 = n1;
            simb = "+"; 
            n1 = 0;
            tela.innerHTML = n1;
            break;
        case "-":
            n2 = n1;
            simb = "-";
            n1 = 0;
            tela.innerHTML = n1;
            break;
        case "x":
            n2 = n1;
            simb = "x";
            n1 = 0;
            tela.innerHTML = n1;
            break;
        case "/":
            n2 = n1;
            simb = "/";
            n1 = 0;
            tela.innerHTML = n1;
            break;
        case "C":
            n1 = 0;
            tela.innerHTML = n1;
            break;
        case "=":
            if (simb == "+"){
                n1 = n1 + n2;
                tela.innerHTML = n1;
            }else if (simb == "-"){
                n1 = n2 - n1;
                tela.innerHTML = n1;
            }else if (simb == "x"){
                n1 = n2 * n1;
                tela.innerHTML = n1;
            }else if (simb == "/"){
                if (n1 != 0){
                    n1 = n2 / n1;
                    tela.innerHTML = n1;
                }else{
                    tela.innerHTML = "Error";
                }
            }
            n2 = 0;
    }
    
}