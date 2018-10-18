
FROM node:10 AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist/* .
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
