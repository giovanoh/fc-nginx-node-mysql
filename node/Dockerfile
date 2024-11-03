FROM node:23

RUN apt-get -q update && \
    apt-get -qy install netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -y 
# RUN npm install -y --loglevel verbose

COPY . .
