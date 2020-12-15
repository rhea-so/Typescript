MAINTAINER JeongHyeon Kim <gameboy5141@gmail.com>
FROM node:latest
RUN mkdir -p /app
WORKDIR /app
ADD . /app
RUN npm install && npm install -g typescript
RUN tsc
EXPOSE 8080
CMD ["npm", "start"]