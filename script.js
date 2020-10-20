var km = prompt("Ciao! Quanti km vuoi percorrere?");

var eta = prompt("Quanti anni hai?");

var prezzo = km * 0.21;

if (eta < 18) {
  prezzo = prezzo * 0.80;
} else if (eta > 65) {
  prezzo = prezzo * 0.60;
}

document.getElementById('prezzo_biglietto').innerHTML = prezzo;
