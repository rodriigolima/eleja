import express from 'express';
import db from "./database";

import routesSession from './routes/routesSession';
import routesUsuarios from './routes/routesUsuarios';
import routesJuizes from './routes/routesJuizes';
import routesCandidatos from './routes/routesCandidatos';
import routesPartidos from './routes/routesPartidos';
import routesEleitores from './routes/routesEleitores';
import routesEnderecos from './routes/routesEnderecos';
import routesZonas from './routes/routesZonas';
import routesVotos from './routes/routesVotos';
import routesTipoUsuario from './routes/routesTipoUsuario';
import tokenSessaoValidation from './middlewares/TokenSessaoValidation';


class App {
   constructor() {
    
    this.server = express();
    this.initializeDatabase();
    this.middlewares();
    this.routesSession();
    this.routesUsuarios();
    this.routesJuizes();
    this.routesCandidatos();
    this.routesPartidos();
    this.routesEleitores();
    this.routesEnderecos();
    this.routesZonas();
    this.routesVotos();
    this.routesTipoUsuario();
  }

  routesSession(){
    this.server.use(routesSession);
   this.server.use(tokenSessaoValidation)
  }

  middlewares() {
    this.server.use(express.json());
  }


    routesUsuarios() {
        this.server.use(routesUsuarios);
    }

    routesTipoUsuario() {
        this.server.use(routesTipoUsuario);
    }

    routesJuizes() {
        this.server.use(routesJuizes);
    }

    routesCandidatos() {
        this.server.use(routesCandidatos);
    }

    routesPartidos() {
        this.server.use(routesPartidos);
    }

    routesEleitores() {
        this.server.use(routesEleitores);
    }

    routesEnderecos() {
        this.server.use(routesEnderecos);
    }

    routesZonas() {
      this.server.use(routesZonas);
  }

  routesVotos(){
    this.server.use(routesVotos);
  }

  
  async initializeDatabase() {
    try {
      await db.authenticate();
      console.log("Conexão com banco realizada com sucesso");
    } catch (error) {
      console.log(
        "Não foi possível conectar ao banco de dados:",
        error.message
      );
    }
  }
}

export default new App().server;
