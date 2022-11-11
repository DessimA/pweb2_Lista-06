let ordemDecrescente = [34, 6, 73, -1, 43, 12, -9]

document.write("Entrada: " + ordemDecrescente.join(",  "));

ordemDecrescente.sort((a, b) => b - a);

document.write("</br>Saída: " + ordemDecrescente.join(",  "));