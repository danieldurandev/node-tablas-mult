const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  const decorador = "=============";
  const decoradorConsola = "=============".green;
  const title = " Tabla del: " + base;
  const titleConsola = " Tabla del: ".bgCyan + colors.yellow(base);

  let = salida = `${decorador}\n${title}\n${decorador}\n`;
  let = consola = `${decoradorConsola}\n${titleConsola}\n${decoradorConsola}\n`;
  for (let i = 1; i <= hasta; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
    consola += `${colors.yellow(base)} ${"x".green} ${colors.yellow(i)} ${
      "=".green
    } ${colors.yellow(base * i)}\n`;
  }
  try {
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    if (listar) console.log(consola);

    return `Tabla del ${base}`;
  } catch (error) {
    throw new Error(error.message);
  }

  // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  //   if (err) throw err;

  //   console.log(`Tabla del ${base} creada`);
  // });
};

// const crearArchivo = async (base = 5) => {
//   return new Promise((resolve, reject) => {
//     const deco = "=============";
//     const title = " Tabla del " + base;

//     let = salida = `${deco}\n${title}\n${deco}\n`;
//     for (let i = 1; i <= 10; i++) {
//       salida += `${base} x ${i} = ${base * i}\n`;
//     }
//     try {
//       fs.writeFileSync(`tabla-${base}.txt`, salida);
//       resolve(`Tabla del ${base}`);
//     } catch (error) {
//       reject(error.message);
//     }
//   });
// };

module.exports = { crearArchivo };
