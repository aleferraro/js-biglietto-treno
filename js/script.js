var km = document.getElementById('distace');

var eta = document.getElementById('age');

var sconto = '';

var totale = '';

var prezzo = km * 0.21;

if (eta < 18) {
  sconto = '20%';
  totale = prezzo - (prezzo * 0.20);
} else if (eta > 65) {
  sconto = '40%';
  totale = prezzo - (prezzo * 0.40);
} else {
  sconto = '0%';
}

document.getElementById('prezzo_biglietto').innerHTML = prezzo.toFixed(2);

document.getElementById('sconto').innerHTML = sconto;

document.getElementById('totale').innerHTML = totale.toFixed(2);
