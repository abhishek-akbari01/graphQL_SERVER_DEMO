const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const mongoose = require('mongoose')

const schema = require('./schema/schema')



const app = express()


app.use(cors())

mongoose.connect('mongodb://localhost:27017/Books')
mongoose.connection.once('open',() => {
    console.log('Connected to the database');
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000,() => {
    console.log("App is running!");
})