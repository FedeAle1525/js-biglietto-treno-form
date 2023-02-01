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

  // 3. Calcolare PREZZO BASE (km * 0.21€) del Biglietto
  const PREZZO_PER_KM = 0.21;
  let prezzoBase = km * PREZZO_PER_KM;

  // 4. Calcolare PREZZO SCONTATO in base a Età
  // 5. Stampare PREZZO su "console.log"
  let prezzoScontato;

  switch(eta){

    case "minorenne":
      prezzoScontato = prezzoBase * 0.8
      console.log("Il prezzo scontato per i minorenni è: ",prezzoScontato);
    break;

    case "senior":
      prezzoScontato = prezzoBase * 0.6;
      console.log("Il prezzo scontato per i senior è: ",prezzoScontato);
    break;

    case "intero":
      console.log("Il prezzo intero del tuo biglietto è: ",prezzoBase);
    break;

  }

});


