function somaDosPositivos(n1, n2, n3 ,n4, n5){
    let arr = [n1,n2,n3,n4,n5];

    let arr2 = arr.filter( number => number >= 0);
    return arr2;
    for(i=0; i < arr.length; i++){
        let soma += arr2[i];
    }
}

console.log(somaDosPositivos(-2, 0, 3, -9, 7));