const fs = require("fs");

function crearArchivo(base=3) {
  console.clear;

 
  console.log("====================================");
  console.log("             Tabla del " + base);
  console.log("====================================");
  
  let salida = "";

  for (let i = 1; i <= 10; i++) {
    salida += `${base} por ${i} = ${base * i}\n`;
  }

  console.log(salida);

  fs.writeFile(`tabla-${base}.txt`, salida, (error) => {
    if (error) throw error;
  });
}

module.exports = {crearArchivo};