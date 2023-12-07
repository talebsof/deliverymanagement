cd laradock

sudo docker-compose up -d workspace postgres nginx
sudo docker-compose exec workspace bash

cd resources/js/angular
npm run start
