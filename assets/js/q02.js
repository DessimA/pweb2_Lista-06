function somaDosPositivos(n1, n2, n3 ,n4, n5){
    let arr = [n1,n2,n3,n4,n5];
    let soma = 0;    

    document.write("Entrada: "+ arr.join(",  "));

    for(i=0; i < arr.length; i++){
       if (arr[i] > 0)
        soma += arr[i];
    }
    return soma;
}

document.write("</br>Soma dos positivos: " + somaDosPositivos(-2, 0, 3, 9, 7));