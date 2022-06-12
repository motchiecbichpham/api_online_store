Package installation

'npm install' to install the required packages.

Docker setup

'docker-compose up' to start the docker container. Used a init script to create dev and test databases.

Jasmine tests

'npm run test' to run jasmine tests. It will change the environment to test and perform tests using the test DB. 

Start express

'npm run start' to start express

DB Migrate
'db-migrate up' to perform migration. Please run this migrate command before accessing any endpoint

ENV Variable
POSTGRES_HOST=
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_PORT=
PORT=
POSTGRES_TEST_DB=
ENV=
BCRYPT_PASSWORD=
SALT_ROUNDS=
TOKEN_SECRET=
TOKEN_TEST=