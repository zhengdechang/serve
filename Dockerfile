FROM node:18.17.1-buster 

WORKDIR /usr/src/app

COPY . .

RUN npm install


CMD [ "npm", "start" ]
