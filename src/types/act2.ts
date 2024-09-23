export interface Equipo {
  detalles(): TipoNotebook | TipoDesktop | TipoServidor;
}

export type TipoOS = "Linux" | "Windows Server" | "Otro" 

export interface TipoNotebook {
  tipo: "Notebook"
  nombre: string
  procesador: string
  ram: string
}

export interface TipoDesktop {
  tipo: "Desktop"
  procesador: string
  ram: string
}

export interface TipoServidor {
  tipo: "Servidor"
  procesador: string
  ram: string
  OS: TipoOS
}