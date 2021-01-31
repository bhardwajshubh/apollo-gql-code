FROM node:10.19.0-slim

RUN apt update -y

COPY . /opt/hello-world-app/

WORKDIR /opt/hello-world-app/

RUN pwd

EXPOSE 3000

CMD [ "npm" , "run", "start-dev" ]