# bit-client
This react application is client side of vulnerable web application. You can find backend in repository: [Server](https://github.com/Bombino1024/bit-app)
# Installation
1. Clone this repository
2. Open project in IDE / Code editor (recommended: VS Code)
3. Install additional packages (npm install)
4. Run client side app (npm start)
# Tutorial
## NoSQL and GraphQL injections
You can try to attack server side application with NoSQL and GraphQL injections via user inputs in FE application. 
## Requests
The implementation of requests you can find in package [api](https://github.com/Bombino1024/bit-client/tree/master/bit-client/src/api)
# Examples
## Query parameters
You can try to get unathorized access with query parameters

![alt text](https://github.com/Bombino1024/bit-client/blob/master/bit-client/src/assets/client1.png)
## NoSQL injections
You can try to run infinite loop on the server side

![alt text](https://github.com/Bombino1024/bit-client/blob/master/bit-client/src/assets/client2.png)
