FROM node:lts-bullseye-slim

RUN mkdir /app
WORKDIR /app

COPY ./package*.json ./

RUN npm install

CMD [ -d "node_modules" ] && npm run start || npm ci && npm run start

