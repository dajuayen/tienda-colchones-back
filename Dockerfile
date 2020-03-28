FROM node:10-alpine

RUN mkdir -p /home/node/back/node_modules && chown -R node:node /home/node/back

WORKDIR /home/node/back

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]
