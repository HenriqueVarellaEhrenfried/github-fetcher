FROM node:9.5.0-stretch
RUN apt-get -y update -qq && apt-get install -y -qq apt-utils tree
COPY . .
RUN npm install
RUN npm i -g serve
RUN npm run build
EXPOSE 5000
CMD serve -s build
# sudo docker build --tag frontend .
# sudo docker run --rm -p 5000:5000 --name frontend frontend