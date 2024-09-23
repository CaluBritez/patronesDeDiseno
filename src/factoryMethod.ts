import { Equipo, TipoNotebook, TipoDesktop, TipoServidor, TipoOS } from "./types/act2";

class EquipoNotebook implements Equipo {
    private tipo: "Notebook";
    private nombre: string;
    private procesador: string;
    private ram: string;

    constructor(nombre: string, procesador: string, ram: string) {
        this.tipo = "Notebook";
        this.nombre = nombre;
        this.procesador = procesador;
        this.ram = ram;
    }

    detalles(): TipoNotebook {
        return { tipo: this.tipo, nombre: this.nombre, procesador: this.procesador, ram: this.ram };
    }
}

class EquipoDesktop implements Equipo {
    private tipo: "Desktop";
    private procesador: string;
    private ram: string;

    constructor(procesador: string, ram: string) {
        this.tipo = "Desktop";
        this.procesador = procesador;
        this.ram = ram
    }

    detalles(): TipoDesktop {
        return { tipo: this.tipo, procesador: this.procesador, ram: this.ram };
    }
}

class EquipoServidor implements Equipo {
    private tipo: "Servidor";
    private procesador: string;
    private ram: string;
    private OS: TipoOS;

    constructor(procesador: string, ram: string, OS: TipoOS) {
        this.tipo = "Servidor";
        this.procesador = procesador;
        this.ram = ram;
        this.OS = OS;
    }

    detalles(): TipoServidor {
        return { tipo: this.tipo, procesador: this.procesador, ram: this.ram, OS: this.OS };
    }
}

type EquipoFactoryProps = {
    tipo: "Notebook" | "Desktop" | "Servidor", 
    nombre?: string, 
    procesador: string, 
    ram: string, 
    OS?: TipoOS,
}

class EquipoFactory {
    public crearEquipo({
        tipo, 
        nombre, 
        procesador, 
        ram, 
        OS,
    }: EquipoFactoryProps): Equipo {
        if (tipo === 'Notebook') {
            return new EquipoNotebook(nombre!, procesador, ram);
        } else if (tipo === 'Desktop') {
            return new EquipoDesktop(procesador, ram);
        } else if (tipo === 'Servidor') {
            return new EquipoServidor(procesador, ram, OS!);
        }
        throw new Error('Tipo de Equipo no reconocido');
    }
}

export const factory = new EquipoFactory();
export const equipo1 = factory.crearEquipo({tipo: "Notebook", nombre: "Dell Latitude", procesador: "i7", ram: "16GB" });
export const equipo2 = factory.crearEquipo({tipo: "Desktop", procesador: "Ryzen 5", ram: "32GB" });
export const equipo3 = factory.crearEquipo({tipo: "Servidor", procesador: "Xeon", ram: "64GB", OS:"Linux" });

console.log(equipo1.detalles());
console.log(equipo2.detalles());
console.log(equipo3.detalles());
