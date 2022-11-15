let mediaDoArray = [10,5,5,5,3,9];
let soma = 0;

document.write("Entrada: " + mediaDoArray.join(",  "));

for (let i in mediaDoArray){
    soma += mediaDoArray[i];
}

document.write("</br>A média é: " + (soma/mediaDoArray.length).toFixed(2));