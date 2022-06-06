import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { createRouter, RouteInterface } from "./route";

export default createRouter({
  prefix: "/auth",
  routes: async (fastify: FastifyInstance, opts: FastifyPluginOptions, done: any) => {
    fastify.post("/login", async (request, reply) => {
      const { username }: any = request.body;
      const token = fastify.jwt.sign({ username: username });
      reply.send({
        t: token,
      });
    });
  }
})