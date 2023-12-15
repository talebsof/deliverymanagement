cd laradock

docker-compose up -d workspace postgres nginx
docker-compose exec workspace bash


//backend
php artisan migrate

//frontend
cd resources/js/frontend
npm install
npm install --save-dev @angular-devkit/build-angular@latest
npm start -- --host 0.0.0.0

#npm run start

