FROM node:18.19.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5600

CMD ["node", "run start"]