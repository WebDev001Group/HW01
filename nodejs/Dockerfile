From node:alpine
Workdir /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
Expose 8080
CMD ["node", "server.js"]