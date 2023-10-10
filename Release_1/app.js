const express = require("express")
const users = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/login",cors(),(req,res)=>{

})


app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await users.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup", async (req, res) => {
    const { email, password, repassword } = req.body;

    if (password !== repassword) {
        res.json("passwords-mismatch");
        return; // Exit the function
    }

    const data = {
        email: email,
        password: password
    };

    try {
        const check = await users.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            const newUser=await
            users.create(data);
                res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});


app.listen(3000,()=>{
    console.log("port connected");
})


