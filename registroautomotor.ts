import { Cars } from "./auto";

export default class Registroautomotor {
    verLista(listado: Cars[]): Cars[] {
        return listado;
    }

    registrarAuto(autonuevo: Cars, verLista: Cars[]) : any{
        if (verLista.push(autonuevo)){
            console.log("Un auto nuevo se ha registrado")
        }
    }
    eliminar(marca: string, array: Cars[]): any {
        let autoEncontrado = array.findIndex((Cars) => Cars.marca == marca);
        if (autoEncontrado >= 0) {
          array.splice(autoEncontrado, 1);
          console.log("Auto eliminado", marca);
          console.log(array);
          return array;
        } else {
          console.log("Auto no eliminado ", marca, "no ha sido eliminado");
        }
      }
    buscar(modelo: string, array: Cars[]) {
        let autobuscado = array.find((Cars) => Cars.modelo === modelo);
        if (autobuscado) {
          console.log(modelo, " Existe en la concesionaria", autobuscado);
          return autobuscado;
        } else {
          console.log(modelo, " No existe en la concesionaria");
        }
      }
};
