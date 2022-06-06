import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { createRouter } from "./route";

export default createRouter({
  prefix: "/",
  routes: async (fastify: FastifyInstance, opts: FastifyPluginOptions, done: any) => {
    fastify.get("/hello", async (request, reply) => {
      await reply.status(200).send({ reply: "Hello World" });
    });
  },
});
