const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ADMIN:w1MrRCDSfEv4eKei@cluster0.xf85mlc.mongodb.net/cardDb')
const userSchema = new mongoose.Schema({
    username : String,
    password : String
})
const cardSchema = new mongoose.Schema({
    name : String,
    description :String,
    interests : {
        1:String,
        2:String,
        3:String,
        4:String 
    }
})
const carditems = mongoose.model('card-items',cardSchema)
const cardUser = mongoose.model('card-holder',userSchema)
const cardAdmin = mongoose.model('admin',userSchema)
module.exports={
    cardUser,
    carditems,
    cardAdmin
}