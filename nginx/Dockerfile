FROM nginx:1.27.2-alpine

RUN apk update && \
    apk add --no-cache wget && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

RUN rm /etc/nginx/conf.d/default.conf

COPY nodeapp.conf /etc/nginx/conf.d