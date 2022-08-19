const  mongoose  = require('mongoose')

require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@${process.env.USER_DB}.mongodb.net/?retryWrites=true&w=majority`)
.then((d)=>{
    console.log('connected')
})
.catch((e)=>{
    console.log('error')
})

exports.mongoose=mongoose