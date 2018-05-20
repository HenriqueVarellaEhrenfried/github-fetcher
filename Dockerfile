FROM node:10.1.0-stretch

RUN apt-get -y update -qq && apt-get install -y -qq apt-utils tree

COPY . .
WORKDIR frontend
RUN npm install 
RUN npm install serve -g
# RUN npm run build
RUN serve -s build -p 80 &

WORKDIR ../backend
RUN npm install 

EXPOSE 5000

CMD npm start