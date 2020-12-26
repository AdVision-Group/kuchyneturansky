FROM node:12.20.0

WORKDIR /app
COPY package.json .
RUN npm install -g gatsby-cli
RUN npm install

COPY . .

RUN npm run clean
RUN npm run build

EXPOSE 9000

CMD ["gatsby", "serve", "-H", "0.0.0.0"]