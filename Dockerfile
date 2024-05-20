FROM node:slim

WORKDIR /usr/src/app

# copy package.json and package-lock.json to the working directory
COPY . .

RUN npm install && npm run build -y

EXPOSE 4000

CMD [ "npm", "run", "start" ]