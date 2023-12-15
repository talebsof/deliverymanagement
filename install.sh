git submodule init
git submodule update

cd laradock


<<<<<<< HEAD
 docker-compose build workspace postgres nginx php-fpm
 docker-compose up -d workspace postgres nginx
 docker-compose exec workspace bash
=======
docker-compose build workspace postgres nginx php-fpm
docker-compose up -d workspace postgres nginx
docker-compose exec workspace bash
>>>>>>> aecc4d395dd793aaaade3076c1cc4e5063fe6d0f


# pour lancer l'application frontend
cd resources/js/angular
npm install
npm run start
