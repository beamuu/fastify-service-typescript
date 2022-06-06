import fastifyPlugin from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";
import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";

const jwtPlugin = async (fastify: FastifyInstance, opts: FastifyPluginOptions) => {
  fastify.register(fastifyJwt, {
    secret: "samplesecret",
  });

  fastify.decorate("authenticate", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
};

export default fastifyPlugin(jwtPlugin);
