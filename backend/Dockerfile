FROM node:9.5.0-stretch
RUN apt-get -y update -qq && apt-get install -y -qq apt-utils
COPY . .
RUN npm install

EXPOSE 3001
CMD npm start
# sudo docker build --tag backend .
# sudo docker run --rm -p 4000:4000 --net="host" --name backend backend