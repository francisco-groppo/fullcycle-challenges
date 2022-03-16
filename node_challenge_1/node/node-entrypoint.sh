dockerize -wait tcp://db:3306 -timeout 20s docker-entrypoint.sh

node index.js