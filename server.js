const express = require("express")
const graphHTTP = require("express-graphql")
const schema = require('./graphql/schema')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/graphql', graphHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Running on port ${PORT}`))