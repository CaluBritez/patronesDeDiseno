import { Request, Response, Router } from 'express';

import { inventario } from '../patrones/singleton';
import { equipo1, equipo2, equipo3 } from '../patrones/factoryMethod';
import {soporte, equipo} from '../patrones/observer';
import { adaptador } from '../patrones/adaptador';

const router = Router();

router.get('/', (req: Request, res: Response) => res.send('Hello World'));


router.get('/singleton', (req: Request, res: Response) => {
    const equipos = inventario.listarEquipos();
    res.json(equipos);
});

router.get('/factorymethod', (req: Request, res: Response) => {
  const equipos = [equipo1.detalles(), equipo2.detalles(), equipo3.detalles()];
  res.json(equipos);
});

router.get('/observer', (req: Request, res: Response) => {
  equipo.agregarObservador(soporte);
  equipo.cambiarEstado('en reparación');
  res.json(equipo);
});

router.get('/adaptador', (req: Request, res: Response) => {
  adaptador.agregarEquipo("Notebook HP", "Portátil", "en reparación");
  adaptador.agregarEquipo("Notebook Asus", "Portátil", "disponible");
  res.json(adaptador.listarEquipos());
});

export { router };
