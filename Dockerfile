# syntax=docker/dockerfile:1

FROM node:latest

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["node", "./build/index.js"]