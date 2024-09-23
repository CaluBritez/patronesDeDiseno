import { Request, Response, Router } from 'express';
import { inventario } from '../singleton';
import { equipo1, equipo2, equipo3 } from '../factoryMethod';

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

export { router };
