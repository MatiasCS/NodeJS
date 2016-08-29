const fs = require('fs');
const saludo = {
	"saludo": "Hola Mundo"
};

fs.writeFile("saludo.json", JSON.stringify(saludo), (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
});