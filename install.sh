cd laradock


sudo docker-compose build workspace postgres nginx php-fpm
sudo docker-compose up -d workspace postgres nginx
sudo docker-compose exec workspace bash


# pour lancer l'application frontend
cd resources/js/angular
npm run start
