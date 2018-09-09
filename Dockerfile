FROM node:8

COPY dist /dist
COPY server.js /server.js
COPY package-express.json /package.json

RUN npm install

CMD [ "node", "server.js" ]
