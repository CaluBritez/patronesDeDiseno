export type Tipo = "Portátil" | "Escritorio" | "Impresora";
export type Estado = "disponible" | "en reparación" | "reservado";

export type Equipo = {
    nombre: string;
    tipo: Tipo;
    estado: Estado;
}