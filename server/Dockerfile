FROM node:20

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 6001

CMD ["npm", "start"]