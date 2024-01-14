const express = require("express");
const app = express();
const users =[{
    name: "John",
    kidneys: [{healthy:false},{healthy:true},{healthy:true}]
}];

 app.use(express.json());

app.get("/",function(req,res){
    const johnkedneys = users[0].kidneys;
    const noOfKidneys = johnkedneys.length;
    let noOfHealthyKidneys = 0;
    for(let i =0 ;i<johnkedneys.length;i++){
        if(johnkedneys[i].healthy == true){
            noOfHealthyKidneys++
        }
    }
    let noOfUnhealthyKindeys = noOfKidneys - noOfHealthyKidneys;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKindeys,
    })
})

app.post("/",function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({healthy:ishealthy})
    res.json({msg:"Done" });
})

app.put("/",function(req,res){
    for(let i= 0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/",function(req,res){
    if(atLeastOneKidney()){
        const newKidneys = [];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy == true){
                newKidneys.push({healthy:true});
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"done"});
    }
    else {
        res.status(411).json({
            msg : "You already have all good kidney"
        })
    }
    
})

// At least one Unhealthy Kidney is there
function atLeastOneKidney(){
    let atLeastOneUn = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy != true){
            atLeastOneUn = true;
        }
    }
    return atLeastOneUn;
}

app.listen(3000);