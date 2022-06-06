import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { createRouter, RouteInterface } from "./route";

export default createRouter({
  prefix: "/secure",
  routes: async (fastify: FastifyInstance, opts: FastifyPluginOptions, done: any) => {
    fastify.get(
      "/me",
      { preValidation: [(fastify as any).authenticate] },
      async (request, reply) => {
        reply.send(request.user);
      }
    );
  }
})