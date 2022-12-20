# eCommerce Rest API using Node js,Express js, MongoDB, JWT and Stripe payment method

## Description

In this project you will find solutions for tasks mentioned above using node js,express js,MongoDB with mongoose ORM, JWT and Stripe payment method.
This project was built to help you start express/mongo API with a boilerplate which is fully ready for most of the basic back end tasks such as authorization, authentication and CRUD

## Features

- User registration and login
- Authentication via JWT
- CRUD for ecommerce rest api project
- MongoDB database

<b>Products Features</b>

| Feature          |  Coded?  | Description                            |
| ---------------- | :------: | :------------------------------------- |
| Add a Product    | &#10004; | Ability to Add a Product on the System |
| List Products    | &#10004; | Ability to List Products               |
| Edit a Product   | &#10004; | Ability to Edit a Product              |
| Delete a Product | &#10004; | Ability to Delete a Product            |
| Stock            | &#10004; | Ability to Update the Stock            |
| Stock History    | &#10004; | Ability to view the Stock History       |

<b>Purchase Features</b>

| Feature        |  Coded?  | Description                             |
| -------------- | :------: | :-------------------------------------- |
| Create a Cart  | &#10004; | Ability to Create a new Cart            |
| View Cart       | &#10004; | Ability to view the Cart and it items    |
| Remove a Cart  | &#10004; | Ability to Remove a Cart                |
| Add Item       | &#10004; | Ability to add a new Item on the Cart   |
| Remove an Item | &#10004; | Ability to Remove an Item from the Cart |
| Checkout       | &#10004; | Ability to Checkout                     |

<b>User Features</b>

| Feature         |  Coded?  | Description                                 |
| --------------- | :------: | :------------------------------------------ |
| Create a User   | &#10004; | Ability to Create a new User                |
| View All Users   | &#10004; | Ability to view all the Users and their data |
| View Single User | &#10004; | Ability to view the User and his/her data    |
| Remove the User | &#10004; | Ability to Remove the User                  |
| Update the User | &#10004; | Ability to update the User's data           |

## Installing

```
git clone https://github.com/ArmineDemirchyan/eCommerce_Api.git
cd .. eCommerce_Api.git
npm install
```

## Getting Started

To test the application

- Register on https://www.mongodb.com/atlas/database
- Create your free shared database and choose a username and password for it
- Add your username and password to the .env file (you need to create your .env file in the root of the project)
- Example
  MONGO_URI="mongodb+srv://username:password@cluster0.nfa40se.mongodb.net/?retryWrites=true&w=majority"
- Choose a random string as JWT secret or generate it in your terminal

```
node
console.log(crypto.randomBytes(64).toString('hex'));
```

- Copy it and place in in your .env file
- Example
  TOKEN_SECRET="yourrandomlygeneratedsecret"
- Start the application

```
nodemon server.js
```

## Endpoints

### Authentication related:

|       Endpoint       | HTTP Method |                         Usage                          |                                                                 Returns                                                                  | Requires Auth | Development Status |
| :------------------: | :---------: | :----------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: | ------------- | ------------------ |
| `/api/auth/register` |   `POST`    |       Accepts the username, email and password.        |                                              JSON data of the user details and a JWT token.                                              | No            | Works              |
|  `/api/auth/login`   |   `POST`    |     Call the API with username/email and password      | Returns the entire user details except private details like passwords and JWT token for accessing endpoints that require authentication. | No            | Works              |
|  `/api/auth/logout`  |   `POST`    | Call the API with required bearer JWT token in header. |                                    Deletes the provided token in the header from the JWT token array.                                    | Yes           | Works              |

### User Related:

|        Endpoint         | HTTP Method |                                             Usage                                             |                                     Returns                                      | Requires Auth | Development Status |
| :---------------------: | :---------: | :-------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: | ------------- | ------------------ |
| `/api/users/update/:id` |    `PUT`    | Requires a JSON of the user details that are needed to be changed and JWT token in the header |             Returns the new data of the user that has been updated.              | Yes           | Works              |
| `/api/users/delete/:id` |   `POST`    |      Requires the ID(mongo db id) of the user that is needed to be deleted and JWT token      |   Returns the JSON users whose ID was given and deleted it from the database.    | Yes           | Works              |
|      `/api/users`       |    `GET`    |                               Required JWT token in the header                                |                    Returns the all users that are registered.                    | Yes           | Works              |
|   `/api/users/stats`    |   `POST`    |                   Requires a JSON of users data and JWT token in the header                   |     Returns the JSON of the users that where registered by last few months .     | Yes           | Works              |
|    `/api/users/:id`     |    `GET`    |      Requires the ID(mongo db id) of the user that is needed to be called and JWT token       | Returns the JSON users whose ID was given and show users data from the database. | Yes           | Works              |

### Product Related:

|          Endpoint          | HTTP Method |                                            Usage                                             |                                         Returns                                         | Requires Auth | Development Status |
| :------------------------: | :---------: | :------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: | ------------- | ------------------ |
| `/api/products/update/:id` |    `PUT`    | Requires a JSON of product details that are needed to be changed and JWT token in the header |               Returns the new data of the product that has been updated.                | Yes           | Works              |
| `/api/products/delete/:id` |  `DELETE`   |    Requires the ID(mongo db id) of the product that is needed to be deleted and JWT token    |      Returns the JSON product whose ID was given and deleted it from the database.      | Yes           | Works              |
|      `/api/products`       |    `GET`    |                               Required JWT token in the header                               |                   Returns the products that are posted by the admin.                    | Yes           | Works              |
|    `/api/products/add`     |   `POST`    |                Requires a JSON of product details and JWT token in the header                |     Returns the JSON of the product that has been sent and stores in the database.      | Yes           | Works              |
|    `/api/products/:id`     |    `GET`    |    Requires the ID(mongo db id) of the product that is needed to be called and JWT token     | Returns the JSON products witches ID was given and show product data from the database. | Yes           | Works              |

### Cart Related:

|         Endpoint          | HTTP Method |                                                    Usage                                                    |                                       Returns                                        | Requires Auth | Development Status |
| :-----------------------: | :---------: | :---------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: | ------------- | ------------------ |
|  `/api/carts/update/:id`  |   `POST`    |      Requires a JSON of cart product details that are needed to be changed and JWT token in the header      |              Returns the new data of the product that has been updated.              | Yes           | Works              |
|  `/api/carts/update/:id`  |  `DELETE`   |      Requires the ID(mongo db id) of the product that is needed to be deleted from cart and JWT token       |      Returns the JSON product whose ID was given and deleted it from the cart.       | Yes           | Works              |
| `/api/carts/find/:userId` |    `GET`    | Requires the ID(mongo db id) of the user,whose cart data is needed to be called from database and JWT token |                Returns the products that are in specific users cart.                 | Yes           | Works              |
|       `/api/carts/`       |    `GET`    |      Requires a JSON of cart product details that are needed to be called and JWT token in the header       | Returns the JSON of the cart products that has been sent and stores in the database. | Yes           | Works              |

### Order Related:

|          Endpoint          | HTTP Method |                                                     Usage                                                     |                                         Returns                                          | Requires Auth | Development Status |
| :------------------------: | :---------: | :-----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: | ------------- | ------------------ |
|       `/api/orders/`       |   `POST`    |                   Requires a JSON of product details that are needed to be added to orders                    |                Returns the new order of the product that has been added.                 | Yes           | Works              |
|     `/api/orders/:id`      |    `PUT`    |     Requires the ID(mongo db id) of the product that is needed to be updated in orders data and JWT token     | Returns the JSON product whose ID was given and updates it's details in orders database. | Yes           | Works              |
|     `/api/orders/:id`      |  `DELETE`   |    Requires the ID(mongo db id) of the product that is needed to be deleted from orders data and JWT token    |         Returns the JSON of product that has been deleted from orders database.          | Yes           | Works              |
| `/api/orders/find/:userId` |    `GET`    | Requires the ID(mongo db id) of the user,whose orders data is needed to be called from database and JWT token |                       Returns the order list of the specific user                        | Yes           | Works              |
|       `/api/orders/`       |    `GET`    |                                              Requires JWT token                                               |                         Returns all orders from orders database                          | Yes           | Works              |
|   `/api/orders/income/`    |    `GET`    |                                              Requires JWT token                                               |                            Returns the orders monthly income                             | Yes           | Works              |

## Database Schemas

### Product:

| Name        | Type                             | Required | Unique | Default |
| ----------- | -------------------------------- | -------- | ------ | ------- |
| \_id        | `mongoose.Schema.Types.ObjectId` | `true`   | `true` | -       |
| title       | `String`                         | `true`   | -      | -       |
| description | `String`                         | `true`   | -      | -       |
| img         | `String`                         | `true`   | -      | -       |
| category    | `Array`                          | -        | -      | -       |
| size        | `Array`                          | -        | -      | -       |
| color       | `Array`                          | `true`   | -      | -       |
| price       | `Number`                         | -        | -      | -       |
| inStock     | `Boolean`                        | -        | -      | `true`  |

### User:

| Name     | Type                             | Required | Unique | Default |
| -------- | -------------------------------- | -------- | ------ | ------- |
| \_id     | `mongoose.Schema.Types.ObjectId` | `true`   | `true` | -       |
| username | `String`                         | `true`   | `true` | -       |
| email    | `String`                         | `true`   | `true` | -       |
| password | `String`                         | -        | -      | -       |
| isAdmin  | `Boolean`                        | -        | -      | `false` |
| img      | `String`                         | -        | -      | -       |

### Cart:

| Name     | Type     | Required | Unique | Default |
| -------- | -------- | -------- | ------ | ------- |
| userId   | `String` | `true`   | `true` | -       |
| products | `Array`  | -        | -      | -       |

### Cart:

| Name     | Type     | Required | Unique | Default   |
| -------- | -------- | -------- | ------ | --------- |
| userId   | `String` | `true`   | `true` | -         |
| products | `Array`  | -        | -      | -         |
| amount   | `Number` | `true`   | -      | -         |
| address  | `Object` | `true`   | -      | -         |
| status   | `String` | -        | -      | "pending" |

## Authors

Contributors names and contact info
Feel free to contribute to the project

ex. Armine Demirchyan
ex. [@arminedemirchyan](https://www.linkedin.com/in/armine-demirchyan/)
