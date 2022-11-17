# graphql_be

- run `npm install` to install the dependencies
- run `npm start` to start the application.
- run `npm run start:dev` to start the application in development mode.

- paste the following commands in the browser at `localhost:3000/graphql`
mutation to create user
```
mutation {
  createUser(userInput: {email: "samsonajulor@gmail.com", password: "123456"}) {
    password
  }
}
```
query to login
```
query {
  login(email: "samsonajulor@gmail.com", password: "123456") {
    userId,
    tokenExpiration
  }
}
```

- This repository depends on a personal package create in the npm registry called [@samsonajulor/eazypay_schema_module](https://www.npmjs.com/package/@samsonajulor/eazypay_schema_module?activeTab=readme)

[CLICK TO VIEW USAGE](https://www.npmjs.com/package/@samsonajulor/eazypay_schema_module?activeTab=readme)