interface Observador {
  cambiarEstado(nombre: string, estado: string): void;
}

class Soporte implements Observador {
  
  constructor() {}

  cambiarEstado(nombre: string, estado: string): void {
      console.log(`Soporte notificado: ${nombre} ha cambiado su estado a ${estado}`);
  }
}

class Equipo {
  private observadores: Array<Observador> = [];
  private nombre: string;
  private tipo: string;
  private estado: string;

  constructor(nombre: string, tipo: string, estado: string) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.estado = estado;
  }

  agregarObservador(observador: Observador): void {
      this.observadores.push(observador);
  }

  eliminarObservador(observador: Observador): void {
      this.observadores = this.observadores.filter(obs => obs !== observador);
  }

  cambiarEstado(nuevoEstado: string): void {
      this.estado = nuevoEstado;
      this.notificarObservadores();
  }

  private notificarObservadores(): void {
      this.observadores.forEach(obs => obs.cambiarEstado(this.nombre, this.estado));
  }
}

export const soporte = new Soporte();
export const equipo = new Equipo('Notebook HP', 'Portátil', 'disponible')