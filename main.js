

const obj =
 {
    edad: null,
    nombre: "Ana Sofia Rincon",
    saludar: function ()
    {
        return `Hola Como ${this.nombre} comon estas`;
    },
 };

obj.apellido = null;
const inst = Object.create(obj);

inst.nombre = "Diego";
inst.setNombre = function (){ obj.nombre = inst.nombre };
inst.getNombre = function (){ return obj.nombre; };

console.log(obj);
console.log(inst);
console.log(inst.saludar());


// const data = {
//     nombre: "Diego Florez Beltran"
// };
// console.log(obj);
// let ejecutar = obj.saludar.bind(data);
// ejecutar();
// console.log(ejecutar());
// data.nombre = "Diego Ismael Florez Beltran";
// console.log(ejecutar());