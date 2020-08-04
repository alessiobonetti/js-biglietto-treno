alert("Questo sito Calcola il costo del Biglietto del treno basandosi su età e km!")
alert("Segui le istruzioni per calcolare il tuo biglietto!!")

// inserimento nome
var nomeUtente = prompt("Inserisci il tuo nome");
document.getElementById("nome_utente").innerHTML = "Ciao " + nomeUtente;

// inserimento età
var etaUtente = prompt("Inserisci la tua età");

// inserimento km
var kmUtente = prompt("Inserisci i km del tuo viaggio");

// costo al km
var costoKm = 0.21

// calcolo costo biglietto
var costoBiglietto = kmUtente * costoKm;


// calcolo sconti

if (etaUtente >= 65) {
  var scontoBiglietto = costoBiglietto / 100;
  scontoBiglietto = scontoBiglietto * 40;
  document.getElementById("costo_biglietto_intero").innerHTML = "Il tuo Biglietto cosa: " + costoBiglietto + " Euro."
  costoBiglietto = Math.round( costoBiglietto - scontoBiglietto );
  document.getElementById("sconto_65").innerHTML = "Siccome hai almeno 65 anni il tuo biglietto viene scontato di: " + scontoBiglietto + " Euro, pari al 40% di sconto.";
  document.getElementById("costo_biglietto").innerHTML = "Scontato il tuo Biglietto costa:" + costoBiglietto + " Euro.";
}
else if (etaUtente < 18) {
  var scontoBiglietto = costoBiglietto / 100;
  scontoBiglietto = scontoBiglietto * 20;
  document.getElementById("costo_biglietto_intero").innerHTML = "Il tuo Biglietto cosa: " + costoBiglietto + " Euro."
  costoBiglietto = Math.round( costoBiglietto - scontoBiglietto );
  document.getElementById("sconto_65").innerHTML = "Siccome hai meno di 18 anni il tuo biglietto viene scontato di: " + scontoBiglietto + " Euro, pari al 20% di sconto.";
  document.getElementById("costo_biglietto").innerHTML = "Scontato il tuo Biglietto costa:" + costoBiglietto + " Euro.";
}
else {
  document.getElementById("costo_biglietto").innerHTML = "Il tuo biglietto costa:" + costoBiglietto + " Euro.";
}
