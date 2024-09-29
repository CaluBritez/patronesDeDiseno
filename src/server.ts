import express, { Application } from "express";
import {router} from './routes/routes';

class Server {

    private app: Application;
    constructor() {
        
        this.app = express();

        this.middlewares();
        this.routes();
    }

    private middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    private routes(){
        this.app.use(router)
    }

    public listen(){
        this.app.listen(3000, () => console.log(`Server on http://127.0.0.1:3000`));
    }
}

export default Server;