# graphql_be

- run `yarn` to install the dependencies
- run `yarn start:dev` to start the application in development mode.

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