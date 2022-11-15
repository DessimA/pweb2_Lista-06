let arrFatorial = [4, 7, 9];
let arrResultadoFatorial= [];

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }


for(let i in arrFatorial){

  arrResultadoFatorial[i] = factorialize(arrFatorial[i]);

}

document.write("Entrada: " + arrFatorial.join(" | "));
document.write("</br>Saída: " + arrResultadoFatorial.join(" | "));