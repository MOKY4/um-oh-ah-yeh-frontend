FROM node:19.6.1-alpine3.17 as builder

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . .

RUN npm install
RUN npm run build
RUN rm .env

FROM nginx
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]