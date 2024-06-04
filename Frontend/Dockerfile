FROM node:18

WORKDIR /app

COPY Frontend/ .

WORKDIR /app/Libroteka/Frontend

RUN npm install

EXPOSE 4200

CMD ["npm", "start", "--", "--host", "0.0.0.0"]
