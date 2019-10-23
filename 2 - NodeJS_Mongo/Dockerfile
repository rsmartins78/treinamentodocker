FROM node:12 as build
WORKDIR /demoApp
COPY package.json package-lock.json /demoApp/
RUN npm install

FROM node:12-alpine as release
EXPOSE 3001
WORKDIR /demoApp
COPY --from=build /demoApp/ /demoApp/
COPY server.js /demoApp/
COPY public/ /demoApp/public/
COPY src/ /demoApp/src/
ENTRYPOINT [ "npm", "run", "app" ]