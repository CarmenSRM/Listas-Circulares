class Base{
    constructor(nombre, minutos){
        this.nombre = nombre;
        this.minutos = minutos;
        this.sig = null;
        this.ant = null;
    }
}

class RutaDeTransporte{
    constructor(){
        this.primero = null;
    }

    agregar(nuevo){
        if( this.primero === null ){
            this.primero = nuevo;
            nuevo.sig = this.primero;
            nuevo.ant = this.primero;
        }else{
            nuevo.sig = this.primero;
            nuevo.ant = this.primero.ant;
            this.primero.ant = nuevo;
            nuevo.ant.sig = nuevo;
        }
    }
}

import Base from "./base.js";
import RutaDeTransporte from "./lista.js";

let ruta =  new RutaDeTransporte();
let base = new Base('Uno', 30);

ruta.agregar(base);