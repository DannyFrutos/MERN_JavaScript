class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log("Nombre:", this.nombre);
    }

    showStats() {
        console.log("Nombre:", this.nombre + ",", "Fuerza:", this.fuerza + ",", "Velocidad:", this.velocidad + ",", "Salud:", this.salud);
    }
    drinkSake() {
        this.salud = this.salud + 10;
    }
}
const ninja1 = new Ninja("Hyabusa", 100);

ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre, 200);
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();