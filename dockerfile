FROM node:latest
COPY . .
RUN npm install
EXPOSE 3580
CMD [ "npm","start" ]