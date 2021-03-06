# kuchyne-turansky.sk

## Set up

inside ```docker-compose.yml``` config ENVIROMENT VARIABLES  

```yml
version: "3"

services: 
  # Production build
  web:
    restart: always
    build: ./client
    command: gatsby serve -H 0.0.0.0
    # Port where app will be accessible [outside world]:[inside container]
    ports:
      - "8080:9000"
    volumes:
      - ./client:/client
    networks:
      - local

  # Development build include hot reloading
  # web:
  #   restart: always
  #   build:
  #     context: ./client
  #     dockerfile: Dockerfile.development
  #   command: gatsby develop -H 0.0.0.0
  #   ports:
  #     - "8080:8000"
  #   volumes:
  #     - ./client:/client
  #   networks:
  #     - local

  # Backend nodeJS app  
  back-end:
    restart: always
    build: ./server
    command: node index.js
    environment:
        # mongodb://username:password@docker-compose-service:port/db
      - MONGO_URI=mongodb://admin:admin@mongodb:27017/test
        # random string
      - ACCESS_TOKEN_SECRET=da2290092a7eb3fd502ebcasda33d3c27541a96f59dd47fb621918257442a8e4a588da0d6fc93681627fef54590cd0021014d60696dfg197124c15c3dd1de998
        # NOT IN USE
        # random string
      - REFRESH_TOKEN_SECRET=12e6d50d90f5a78d9ac1e32fdf06297888699bca2f86f740183eed449bd42f94sd120c78af636b14140a5dec36d6cee38fc1ea978sd4b3b38fa4126beff3e558
        # Credentials for login form 
        # USERNAME=username
        # PASSWORD=password
      - USERNAME=superSecretAdminLogin
      - PASSWORD=ultraSecretAdminPassword
    ports: 
      - 9000:9000
    links: 
      - mongodb
    volumes: 
      - ./server:/server
    networks:
      - local

  mongodb:
    image: mongo:4.2.3-bionic
    ports:
      - 27017:27017
    environment:
        # database credentials
      - MONGO_INITDB_DATABASE=test
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=admin

    volumes:
      - ./mongo-entrypoint:/docker-entrypoint-initdb.d
        # named volumes
      - ./mongodb:/data/db
      - ./mongoconfig:/data/configdb
    networks:
      - local

  # admin interface for interacting with mongo
  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
        # docker mongo service name
      - ME_CONFIG_MONGODB_SERVER=mongodb
        # mongo credentials
      - ME_CONFIG_MONGODB_ADMINUSERNAME=admin
      - ME_CONFIG_MONGODB_ADMINPASSWORD=admin
        # credentials to get access to interface
      - ME_CONFIG_BASICAUTH_USERNAME=secretUsername
      - ME_CONFIG_BASICAUTH_PASSWORD=secretPassword
    links: 
      - mongodb
    networks:
      - local
    depends_on:
      - mongodb

networks:
  local:
    driver: bridge
```

secondly we need to config ```.env``` in ```./client``` folder.
development and production are using they own ```.env``` file.

```dotenv
    <!-- Production -->
    ./client/.env.production
    <!-- Development -->
    ./client/.env.development
```

```dotenv
<!-- backend endpoint [url] -->
ENDPOINT=http://localhost:9000
<!-- localstorage name for JWT [string] -->
ADMIN_TOKEN=kchntrnsktkn 
```

## Start this stack

for the first time

```cmd
    sudo docker-compose up --build -d
```

otherwise

```cmd
    sudo docker-compose up -d
```

shutdown the services

```cmd
    docker-compose down
```

```-d``` means detach if you want to see logs delete this flag.
