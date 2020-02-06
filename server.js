const express = require("express")
const graphHTTP = require("express-graphql")
const schema = require('./graphql/schema')

const app = express()

app.use('/graphql', graphHTTP({
  schema,
  graphiql: true
app.use('/graphql', graphHTTP({
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Running on port ${PORT}`))