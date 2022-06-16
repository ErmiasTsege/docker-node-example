# syntax=docker/dockerfile:1

FROM node:16.5.0 as base

COPY . /app

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test

RUN npm ci

COPY . .

CMD ["npm","run","test"]

FROM base as prod

RUN npm ci --production

COPY . .

EXPOSE 3000

CMD ["node","app.js"]  
