
var COST_KM = 0.21;
var SCONTO_GIOVANI = 0.2;
var SCONTO_OVER = 0.4;

// definisco la variabile che fa riferimento al bottone genera
var creaBiglietto = document.getElementById('creaBiglietto');

// istruisco il bottone genera a reagire al click
creaBiglietto.addEventListener('click',
function() {

  // dati inseriti dall'utente
  var passenger = document.getElementById('name');
  var distance = document.getElementById('distance');
  var eta = document.getElementById('age');

  // calcolo costo biglietto
  var prezzoBiglietto = COST_KM * parseInt(distance.value);

  if (eta = 'Minorenne') {
    prezzoBiglietto -= prezzoBiglietto * SCONTO_GIOVANI;
  } else if (eta = 'Over65') {
    prezzoBiglietto -= prezzoBiglietto *SCONTO_OVER;
  } else if (eta = 'Altro') {
    prezzoBiglietto = prezzoBiglietto;
  }

  var ticket = document.getElementById('ticket');
  ticket.style.visibility = 'visible';

  // aggiorno il box 'ticket' con i dati
  document.getElementById('passengerName').innerHTML = passenger.value;
  document.getElementById('offer').innerHTML = eta;
  document.getElementById('coach').innerHTML = parseInt(Math.random()*10);
  document.getElementById('cp').innerHTML = parseInt(Math.random()+90000);
  document.getElementById('cost').innerHTML = prezzoBiglietto.toFixed(2) + ' €';
}
);
