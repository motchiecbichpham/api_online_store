Package installation

'npm install' to install the required packages.

Create a .env file with variables below:

POSTGRES_HOST=localhost
POSTGRES_DB=
POSTGRES_USER=postgres
POSTGRES_PASSWORD=
POSTGRES_PORT=
PORT=
POSTGRES_TEST_DB=
ENV=
BCRYPT_PASSWORD=
SALT_ROUNDS=
TOKEN_SECRET=
TOKEN_TEST=

DATABASE setup:
- create database my_store;
- create database my_store_test;
- db-migrate up
- npm run start 
Docker setup

'docker-compose up' to start the docker container. Used a init script to create dev and test databases.

Jasmine tests

'npm run test' to run jasmine tests. It will change the environment to test and perform tests using the test DB and fill a TOKEN_TEST to .env file

Start express

'npm run start' to start express

DB Migrate
'db-migrate up' to perform migration. Please run this migrate command before accessing any endpoint
