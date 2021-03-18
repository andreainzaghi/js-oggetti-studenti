// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovostudente ={};


var nome = prompt("inserisci il nome ");
var cognome = prompt("inserisci il cognome");

var eta = prompt("inserisci leta");

nuovostudente.nome=nome;
nuovostudente.cognome=cognome;
nuovostudente.eta=eta;
// iserisco il nuovo oggetto nellarray
studenti.push(nuovostudente);
