// 1. Recuperare elementi INPUT da pagine HTML
const kmElement = document.getElementById("km");
const etaElement = document.getElementById("eta");
const calcolaElement = document.getElementById("calcola");

console.log(kmElement,etaElement,calcolaElement);

// 2. Recuperare valori degli elementi INPUT quando si interagisce con il pulsante "Calcola"

calcolaElement.addEventListener("click", function() {

  const km = parseFloat(kmElement.value);
  const eta = etaElement.value;
  console.log("KM: ",km);
  console.log("Età: ",eta);

  

});


