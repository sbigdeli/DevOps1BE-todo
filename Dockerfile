# Tar en image från node:slim
FROM node:slim
# Skapar en fil & döper till /usr/src/app
WORKDIR /usr/src/app
# Kopierar allting i repot till Docker containern
COPY . .
# Kör npm install och npm run build -y i containern i Docker
RUN npm install && npm run build -y
# Använder port 4000
EXPOSE 4000
# Kör npm, run, prod i Docker
CMD [ "npm", "run", "prod" ]