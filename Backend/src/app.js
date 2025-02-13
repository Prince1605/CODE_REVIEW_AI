const express =require('express');
const aiRoutes =require('./routes/ai.routes')
const cors= require('cors')

const app =express()

// Enabling cors for sharing data

app.use(cors())
// Using middleware
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World: ')
})

app.use('/ai',aiRoutes)


module.exports=app;