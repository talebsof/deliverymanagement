cd laradock

docker-compose up -d workspace postgres nginx
docker-compose exec workspace bash

cd resources/js/angular
npm run start
