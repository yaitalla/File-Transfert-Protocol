#!/bin/bash

#On peut pas acceder a '/' sans token
curl -X GET http://localhost:4000
printf "\n\n"

#On peut avoir un token si on s'identifie
curl --header "Content-Type: application/json" --request POST --data '{"password":"password", "username":"yassine"}' http://localhost:4000/auth/login;
printf "\n\n"

#par contre ça marhce pas encore
curl -X GET -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDIxMDk1NjYsImV4cCI6MTU0MjExMDQ2Nn0._siU0ih7MA_j6x6tNCb7JykfOYp9n44mrlMwFIGOqec","refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDIxMDk1NjYsImV4cCI6MTU0MjExODU2Nn0.FBJQV0wnVgwzQfvlkzYMsLrdz70g0DVHXqOcZd6w5eE' http://localhost:4000
