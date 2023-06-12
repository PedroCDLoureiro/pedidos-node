FROM node:18-alpine

WORKDIR /desafio-smart
COPY . .
RUN yarn install --production
RUN yarn 
EXPOSE 3000
CMD yarn start