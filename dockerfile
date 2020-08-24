FROM node:alpine

WORKDIR C:\Users\paulo.cesar.junior\dev

COPY package*.json ./
RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]