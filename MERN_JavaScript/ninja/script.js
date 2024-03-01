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