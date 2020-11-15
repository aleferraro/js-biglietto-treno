/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km (0.21 € al km)
 va applicato uno sconto del 20% per i minorenni
 va applicato uno sconto del 40% per gli over 65
Stampare poi nella pagina il risultato.


Partendo dall'esercizio di ieri, aggiungiamo la parte visiva come da screenshot
Creiamo un finto biglietto del treno con:
Nome passeggero
Codice treno (numero casuale tra 90000 e 100000 escluso)
Numero carrozza
Prezzo calcolato
Categoria selezionata dall'utente

Bonus:
Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.
*/
var COST_KM = 0.21;
var SCONTO_GIOVANI = 0.2;
var SCONTO_OVER = 0.4;


//imposto questi valori per far in modo che al refresh della pagina i campi risultino vuoti
document.getElementById('distance').value = '';
document.getElementById('name').value = '';

// definisco la variabile che fa riferimento al bottone genera
var creaBiglietto = document.getElementById('creaBiglietto');

// istruisco il bottone genera a reagire al click
creaBiglietto.addEventListener('click',
function() {

  // dati inseriti dall'utente
  var passenger = document.getElementById('name').value;
  var distance = document.getElementById('distance').value;
  var eta = document.getElementById('age').value;

  // calcolo costo biglietto
  var prezzoBiglietto = COST_KM * parseInt(distance);


  if (eta === "Minorenne") {
    prezzoBiglietto -= prezzoBiglietto * SCONTO_GIOVANI;
  } else if (eta === "Over65") {
    prezzoBiglietto -= prezzoBiglietto *SCONTO_OVER;
  } else if (eta === "Standard") {
    prezzoBiglietto = prezzoBiglietto;
  }


  // definisco la variabile ticket e faccio in modo che il box del biglietto diventi visibil eal click del bottone genera
  var ticket = document.getElementById('ticket');
  ticket.style.visibility = 'visible';

  // aggiorno il box 'ticket' con i dati
  document.getElementById('passengerName').innerHTML = passenger;
  document.getElementById('offer').innerHTML = eta;
  document.getElementById('coach').innerHTML = parseInt(Math.random()*10 + 1);
  document.getElementById('cp').innerHTML = parseInt(Math.random()*10000 + 90000);
  document.getElementById('cost').innerHTML = prezzoBiglietto.toFixed(2) + ' €';
}
);

// definisco la variabile che fa riferimento al bottone annulla
var refresh = document.getElementById('refresh');

// istruisco il bottone annulla a reagire al clik aggiornando la pagina
refresh.addEventListener('click',
function() {
  document.getElementById('distance').value = '';
  document.getElementById('name').value = '';
  document.getElementById('age').value = 'Standard';

  var ticket = document.getElementById('ticket');
  ticket.style.visibility = 'hidden';
}
);
