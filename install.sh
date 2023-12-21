git submodule init
git submodule update

cd laradock


 docker-compose build workspace postgres nginx php-fpm
 docker-compose up -d workspace postgres nginx
 docker-compose exec workspace bash



# pour lancer l'application frontend
cd resources/js/frontend
npm install
npm install --save-dev @angular-devkit/build-angular@latest
npm start -- --host 0.0.0.0
