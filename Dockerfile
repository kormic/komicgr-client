FROM node:14.1-alpine 

WORKDIR /opt/web
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./

EXPOSE 4200
CMD npm run start-docker