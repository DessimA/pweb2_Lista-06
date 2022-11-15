let arr = [1,2,3,4,5,6,7];
let arr2 = [];

for (let i in arr) {
    arr2[i] = arr[i]*arr[i]; 
  } 

document.write("Entrada: " + arr.join(",  "));
document.write("</br>Saída: " + arr2.join(",  "));