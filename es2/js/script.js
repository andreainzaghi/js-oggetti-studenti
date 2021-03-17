var studenti = [
	{
	nome: "Mario",
	cognome: "Rossi",
  altezza: 190,
  capelli:"marroni",
  eta:24
},
{
	nome: "davide",
	cognome: "Rossini",
  altezza: 191,
  capelli:"marroni",
  eta:24
},
];

for (var key in studenti) {
  console.log(studenti[0].nome);
	console.log(studenti[0].cognome);
	console.log(studenti[1].nome);
	console.log(studenti[1].cognome);
}
