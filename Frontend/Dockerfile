FROM node:18

WORKDIR /app

COPY Frontend/package*.json ./

RUN npm install

COPY Frontend/ .

# RUN npm run build

EXPOSE 4200

CMD ["npm", "start"]
