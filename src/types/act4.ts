export type Tipo = "Portátil" | "Desktop" | "Servidor";

export interface Equipo {
    nombre: string;
    tipo: Tipo;
    estado: string;
}

export interface Inventario {
    agregarEquipo: (nombre: string, tipo: Tipo, estado: string) => void;
    listarEquipos: () => void;
}