require("colors");
const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

console.clear();
// console.log(argv);
// console.log(argv);
// const base = 20;
// const [, , arg3 = "base=1"] = process.argv;
// const [, base = 1] = arg3.split("=");

crearArchivo(argv.base, argv.listar, argv.hasta)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado".green))
  .catch((err) => {
    console.log(123);
    console.log(err);
  });
