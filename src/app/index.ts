import { FastifyInstance, fastify } from "fastify";
import { ClassElement } from "typescript";
import { Router } from "../routes/route";

interface InitialAppConfig {
  routes: any[];
  plugins: any[];
}

export default class App {
  public app: FastifyInstance;

  constructor({ routes, plugins }: InitialAppConfig) {
    this.app = fastify({ logger: true, trustProxy: true });
    // Must register plugins before routes
    this.registerPlugins(plugins);
    // Routes turn!!
    this.registerRoutes(routes);
  }

  private registerRoutes(routes: { forEach: (arg0: (router: any) => void) => void }) {
    routes.forEach((router: Router) => {
      this.app.register(router.routes, { prefix: router.prefix });
    });
  }

  private registerPlugins(plugins: { forEach: (arg0: (route: any) => void) => void }) {
    plugins.forEach((plugin) => {
      this.app.register(plugin);
    });
  }

  public listen() {
    this.app.listen(8080, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  }
}
