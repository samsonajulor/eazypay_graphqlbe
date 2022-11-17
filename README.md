# graphqlbe

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