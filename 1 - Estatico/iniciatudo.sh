#!/bin/bash

docker build -t meu-app .
docker run -d --name container1 -p 80:80 meu-app
docker run -d --name container2 -p 81:80 meu-app
docker run -d --name container3 -p 82:80 meu-app