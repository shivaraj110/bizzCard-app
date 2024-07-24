const e = require("express");
const { cardUser ,cardAdmin , carditems } = require("./db");
const { parseUser , cardItems} = require("./types");
const jwt = require('jsonwebtoken')
const cors = require('cors')
const secret = 'secret'
const app = e()
app.use(cors())
app.use(e.json())
app.post('/sign-up',(req,res)=>{
    const userPayload = req.body
    const parsedPayload = parseUser.safeParse(userPayload)
    if(!parsedPayload.success){
        res.status(400).json({msg : 'invalid inputs'})
        return
    }
    cardUser.create({
        username :  userPayload.username,
        password : userPayload.password
    })
    res.json({msg : 'user created!'})
})

app.post('/admin',(req,res)=>{
    const userPayload = req.body
    const parsedPayload = parseUser.safeParse(userPayload)
    if(!parsedPayload.success){
        res.status(400).json({msg : 'invalid inputs'})
        return
    }
    cardAdmin.create({
        username :  userPayload.username,
        password : userPayload.password
    })
    res.json({msg : 'admin created!'})
})
async function adminValidator(req,res,next){
    const username = req.headers.username
    const password = req.headers.password
    const admin = await cardAdmin.findOne({
        username : username,
        password : password
    })
    if(!admin){
        return res.status(400).json({msg : 'you are not an admin'})
    }
    else{
        next()
    }
}

app.get('/sign-in',async (req,res)=>{
    const userPayload = req.body
    const user = await cardUser.findOne(
        {
            username : userPayload.username,
            password : userPayload.password
        }
    )
    if(!user)
        res.status(400).json({msg:'invalid username or password!'})
    const username  = userPayload.username
    const pass = userPayload.password
    const token = jwt.sign({username,pass},secret)
    res.json({  msg:'signed in!',
                token: token
    })
})
app.post('/card',adminValidator,(req,res)=>{
    const cardPayload = req.body
    const parsedCard = cardItems.safeParse(cardPayload)
    if(!parsedCard.success)
        res.status(400).json({msg : 'invalid card details!'})
    else{
        carditems.create({
            name : cardPayload.name,
            description : cardPayload.description,
            interests : {
                1 : cardPayload.interests['1'],
                2 : cardPayload.interests['2'],
                3 : cardPayload.interests['3'],
                4 : cardPayload.interests['4'],
            }
        })
        res.json({msg : 'card details added!'})
    }
})
app.get('/cards',async(req,res)=>{
    const cards = await carditems.find({})
    res.json({ cards : cards})
})
app.put('/update-card',adminValidator,async(req,res)=>{
    const cardPayload = req.body
    const parsedCard = cardItems.safeParse(cardPayload)
    if(!parsedCard.success)
        res.status(400).json({msg : 'invalid card details!'})
    else{
        carditems.updateOne({
            name : cardPayload.name
        },{
            $set:{
            name : cardPayload.name,
            description : cardPayload.description,
            interests : {
                1 : cardPayload.interests['1'],
                2 : cardPayload.interests['2'],
                3 : cardPayload.interests['3'],
                4 : cardPayload.interests['4'],
            }
            }
        }).then(async(resp)=>{
            if(resp.acknowledged)
                res.json({msg : 'card details updated!'})
            else
            res.status(400).json({msg : 'something went wrong!'})
        })
    }
})
app.delete('/delete-card',adminValidator,(req,res)=>{
    const cardPayload = req.body
    carditems.deleteOne({
        name : cardPayload.name
    }).then(async (resp)=>{
        if(resp.acknowledged)
            res.json({msg : 'card deleted!'})
        else
        res.status(400).json({msg : 'something went wrong!'})
    })
})
app.listen(3000)