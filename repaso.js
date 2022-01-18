const dividir = require("./mod_promesas");
const colors = require('./node_modules/colors');
const argv = require('yargs').argv;

const persona = {
  nombre: "Juan",
  apellido: "López",
  departamento: "Informática",
  getNombre: function () {
    return `${this.nombre} ${this.apellido} depto: ${this.departamento}`;
  },
};

//console.log(persona.getNombre());

//let nombre = persona.nombre;
//let apellido = persona.apellido;
//let depto = persona.departamento;

//let { nombre, apellido, departamento } = persona;

//console.log(nombre, apellido, "depto:", departamento);

//const plantilla = ["Juan", "Maria", "Rosa"];

//let [ni, n2, n3] = plantilla;

//Funciones flecha

//const suma = (n1,n2) => {
//return n1+n2;
//}

//const suma = (n1, n2) => n1 + n2;

//console.log("suma:", suma(3, 4));

//función que paso como parámetro a la función setTimeout, es CALLBACK
//setTimeout(() => {
  //console.log("Hola mundo");
//}, 1500);

const getUsuarioById = (id) => {
  const plantilla = [
    {
      id: 1,
      nombre: "Juan",
    },
    {
      id: 2,
      nombre: "María",
    },
  ];

  const miPromesa = new Promise (
      (resolve, reject) =>{
        let usuario = plantilla.find((persona) => persona.id == id)?.nombre;
    if( usuario) {
        resolve(usuario)
    }else{
        reject(`El usuario con id ${id} NO EXISTE`)
    }
      }
  )

      return miPromesa;

};

getUsuarioById(2)
.then( (usuario)=>console.log('Usuario: '.random + usuario))
.catch ((msg) =>console.log(msg));


console.log(argv);
dividendo = argv.div;
n1 = argv.n1;
n2 = argv.n2;


dividir(n1,n2)
.then( (resultado) => console.log(`Resultado ${resultado}`.rainbow))
.catch ((error) => console.log(error));


// Y cuando ejecutes pones --n1=6 --n2=10



