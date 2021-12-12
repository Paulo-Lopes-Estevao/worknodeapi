const app = require("./src/app");
const  dotenv = require('dotenv')


dotenv.config()


app.get("/", function(req, res){
    res.json("Welcome")
})

app.listen(process.env.PORT || 8000, () => {
    console.log('Rodando em localhost:'+process.env.PORT)
})
