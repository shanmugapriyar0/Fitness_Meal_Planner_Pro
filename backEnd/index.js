const  express =require("express");
const cors = require("cors")
const app = express();


app.use(cors())

app.get("/",(request,response)=>{
    response.send(`server is working`);
})

app.post("/login",(request,response)=>{
    console.log(request.body)
    response.send(`server is working`);
})

app.listen(3005,()=>{
    console.log(`server started`);
})
