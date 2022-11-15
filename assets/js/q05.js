let meuNome =  "José Anderson da Silva Costa";
let arrMeuNome = meuNome.split(" ");
let arrIniciais = [];

for( let i in arrMeuNome){
    arrIniciais[i] = arrMeuNome[i].substring(0,1);
}
document.write("Entrada: " + meuNome);
document.write("</br>Saída: " + arrIniciais.join("").toUpperCase());

