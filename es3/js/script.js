var persona = {
	nome: "Mario",
	cognome: "Rossi",
  altezza: 190,
  capelli:"marroni",
  eta:24,
  studente : true,
};

for (var key in persona) {
  document.getElementById('people').innerHTML= persona[key];
}
