git submodule init
git submodule update

cd laradock


 docker-compose build workspace postgres nginx php-fpm
 docker-compose up -d workspace postgres nginx
 docker-compose exec workspace bash


# pour lancer l'application frontend
cd resources/js/angular
npm run start
