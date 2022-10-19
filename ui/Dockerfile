FROM node:11-alpine

WORKDIR /usr/src/app/my-app

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
