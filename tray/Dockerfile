# Stage 1

FROM node:14-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json app/

RUN npm install

COPY . /app


# Stage 2

FROM nginx:1.21.0

COPY --from=build-step /app/dist/client /usr/share/nginx/html