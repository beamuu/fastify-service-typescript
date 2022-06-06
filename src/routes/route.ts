import { FastifyInstance, FastifyPluginOptions } from "fastify";

export interface RouteInterface {
  prefix: string;
  routes: (fastify: FastifyInstance, opts: FastifyPluginOptions, done: any) => Promise<void>;
}

export class Router implements RouteInterface {
  public prefix: string = "";
  public routes = async (fastify: FastifyInstance, opts: FastifyPluginOptions, done: any) => {}

  constructor(
    _prefix: string,
    _routes: (fastify: FastifyInstance, opts: FastifyPluginOptions, done: any) => Promise<void>
  ) {
    this.prefix = _prefix;
    this.routes = _routes;
  }
}

export const createRouter = ({prefix, routes}: RouteInterface
) => new Router(prefix, routes);
