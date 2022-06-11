## Steps to run the project:

### In this setup, postgres is running inside a docker container

1. Clone the project to your local machine
2. Create a .env file with these variable inside it(change the ENV variable here to test when running tests):

3. Open a terminal window and run command (here, we are starting our container for postgres)
   ```
   docker-compose up
   ```
4. Open second terminal window and run these commands (here, we are setting up the database and the user privileges)
   ```
   docker-compose exec postgres bash
   psql
   CREATE DATABASE store_backend_db;
   CREATE DATABASE store_backend_db_test;
   \l
   \c storefront_db
   \dt
   ```
5. Open third terminal window and run the commands (here, we will be running db-migrate firstly and then running the application)
   ```
   npm install
   npm install -g db-migrate
   npm run migrate
   npm run test
   npm run watch
   ```

### Once the project is up and running we need to test it using postman

1. (CREATE USER)Send a POST request to url [http://0.0.0.0:3000/users/] with body containing raw json
   {
   "firstName": "hihi",
    "lastName": "haha",
   "password": "somePassword"
   }
   you will receive a jwt in your response window copy it.
2. Send a GET request to url [http://0.0.0.0:3000/users/] & [http://0.0.0.0:3000/users/1] with the bearer token inside authorization header set to the value of the jwt that was received earlier. You will get a list of all the users that are existing.
3. (CREATE PRODUCT) Send a POST request to url [http://0.0.0.0:3000/products]
   {
   "name": "chocolate",
   "price": 1,
   "category": "cake"
   }
4. Send a GET request to url [http://0.0.0.0:3000/products/] , [http://0.0.0.0:3000/products/:id] , [http://0.0.0.0:3000/products/category/:category]
5. (CREATE ORDER) Send a POST request to url [http://0.0.0.0:3000/orders/] with the bearer token for authorization and raw json in the body
   {
   "user_id": "1",
   "status": "completed"
   }
6. (COMPLETED ORDER) Send a GET request to the [http://0.0.0.0:3000/users/:id/orders/completed] with the bearer token
