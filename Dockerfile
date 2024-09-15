FROM node:lts AS build
WORKDIR /app 
COPY package.json /app 
RUN yarn install 
COPY . .
RUN yarn build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080