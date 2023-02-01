// 1. Recuperare elementi INPUT da pagine HTML
const kmElement = document.getElementById("km");
const etaElement = document.getElementById("eta");
const calcolaElement = document.querySelector(".form button.btn-primary");
const annullaElement = document.querySelector(".form button.btn-danger");

console.log(kmElement,etaElement,calcolaElement,annullaElement);

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
  // 5. Stampare PREZZO su File HTML
  let prezzoScontato;

  switch(eta){

    case "minorenne":
      prezzoScontato = prezzoBase * 0.8
      // console.log("Il prezzo scontato per i minorenni è: ",prezzoScontato);
      document.getElementById("sconto").innerHTML = "20%";
      document.getElementById("prezzo-finale").innerHTML = prezzoScontato.toFixed(2);
    break;

    case "senior":
      prezzoScontato = prezzoBase * 0.6;
      // console.log("Il prezzo scontato per i senior è: ",prezzoScontato);
      document.getElementById("sconto").innerHTML = "40%";
      document.getElementById("prezzo-finale").innerHTML = prezzoScontato.toFixed(2);
    break;

    case "intero":
      // console.log("Il prezzo intero del tuo biglietto è: ",prezzoBase);
      document.getElementById("sconto").innerHTML = "NO";
      document.getElementById("prezzo-finale").innerHTML = prezzoBase.toFixed(2);
    break;
  }

  document.querySelector("table td.km").innerHTML = km;
  document.getElementById("prezzo-base").innerHTML = prezzoBase.toFixed(2);

  // 6. Generare numero casuale da 1 a 9 (compresi) per indicare il numero della Carrozza
  const numeroCarrozza = Math.floor(Math.random() * (9 - 1) + 1);
  document.getElementById("carrozza").innerHTML = numeroCarrozza;

  // 7. Generare numero casuale da 1 a 30 (compresi) per indicare il numero del Posto
  const numeroPosto = Math.floor(Math.random() * (30 - 1) + 1);
  document.getElementById("posto").innerHTML = numeroPosto;

});

// 6. Interangendo con Pulsante Annulla vengono resettati gli Input

annullaElement.addEventListener("click", function(){

  kmElement.value = "";
  etaElement.value = "type";

  document.getElementById("carrozza").innerHTML = "Numero";
  document.getElementById("posto").innerHTML = "Numero";
  document.querySelector("table td.km").innerHTML = "KM";
  document.getElementById("sconto").innerHTML = "Sconto";
  document.getElementById("prezzo-base").innerHTML = "Prezzo Base";
  document.getElementById("prezzo-finale").innerHTML = "Prezzo Finale"



});


