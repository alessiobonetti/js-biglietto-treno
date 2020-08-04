// inserimento nome
var nomeUtente = prompt("Inserisci il tuo nome");
document.getElementById("nome_utente").innerHTML = nomeUtente;

// inserimento età
var etaUtente = prompt("Inserisci la tua età");

// inserimento km
var kmUtente = prompt("Inserisci i km del tuo viaggio");

// costo al km
var costoKm = 0.21

// calcolo costo biglietto
var costoBiglietto = kmUtente * costoKm;
document.getElementById("costo_biglietto").innerHTML = costoBiglietto;
