#!/bin/bash

# Kompliera chmod
# chmod +x deploy.sh

# Bygg Docker-image
docker build -t todo .

# Kontrollera om container redan körs och stoppa den
if [ $(docker ps -q -f name=container_todo) ]; then
    docker stop container_todo
    docker rm container_todo
fi

# Starta en ny container
docker run -d -p 4000:4000 --name container_todo todo
