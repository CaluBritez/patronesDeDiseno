import { Equipo, Tipo, Inventario } from "../types/act4";

class InventarioViejo {
    private equipos: Array<Equipo> = [];

    public agregarItem(nombre: string, tipo: Tipo, estado: string): void {
        this.equipos.push({ nombre, tipo, estado });
    }

    public verEquipos(): Array<Equipo> {
        return this.equipos;
    }
}

class AdaptadorInventario implements Inventario {
    private inventarioViejo: InventarioViejo;

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    public agregarEquipo(nombre: string, tipo: Tipo, estado: string): void {
        return this.inventarioViejo.agregarItem(nombre, tipo, estado);
    }

    public listarEquipos(): Array<Equipo> {
        return this.inventarioViejo.verEquipos();
    }
}

export const inventarioViejo = new InventarioViejo();
export const adaptador = new AdaptadorInventario(inventarioViejo);
