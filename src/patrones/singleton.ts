import { Equipo, Tipo, Estado  } from "../types/act1";

class Inventario {
    private static instancia: Inventario;
    private equipos: Array<Equipo> = [];

    private constructor() {}

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }

    public agregarEquipo(nombre: string, tipo: Tipo, estado: Estado): void {
        this.equipos.push({
            nombre,
            tipo,
            estado,
        })
    }

    public listarEquipos() {
        return this.equipos;
    }
}

export const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "en reparación");
inventario.agregarEquipo("Dell Latitude E5450", "Portátil", "disponible");
inventario.agregarEquipo("HP OfficeJet 4520", "Impresora", "reservado");

/*
console.log(inventario.listarEquipos());
*/