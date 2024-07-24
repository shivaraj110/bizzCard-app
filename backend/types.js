const z = require('zod')
const parseUser = z.object({
    username : z.string(),
    password : z.string()
})
const cardItems = z.object({
    name : z.string(),
    description : z.string(),
    interests : z.object({
        1: z.string(),
        2: z.string(),
        3: z.string(),
        4: z.string() 
    })
})
module.exports={
    parseUser,
    cardItems
}