require('dotenv').config();
const app=require('./src/app')

const port = 3000


app.listen(port,()=>{
    console.log('Server is running on https://localhost:3000')
})