const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
    .then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1 = new Chat ({
//     from : "neha",
//     to : "priya",
//     msg : "send me your exam sheets ",
//     created_at : new Date(), //UTC
// });
// chat1.save().then((res)=>{
//     console.log(res);
// })

//Index route
app.get("/chats", asyncWrap(async (req,res)=>{
    // try{
        let chats = await Chat.find();
        // console.log(chats);
        // res.send("working");
         res.render("index.ejs",{chats});
    // } catch(err) {
    //     next(err);
    // }
   
}));

//New Route
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"Page not found");
    res.render("new.ejs");
});

//Create route
app.post("/chats",asyncWrap(async(req,res,next)=>{
   // try{
        let{from,to,msg}=req.body;
        let newChat = new Chat ({
            from : from,
            to : to,
            msg : msg,
            created_at : new Date(),
        });
        await newChat.save();
        res.redirect("/chats");
//}
    //console.log(req);
    
   // console.log(newChat);
    
   // res.render("new.ejs");
   //save the chat
//    .then((res) => {
//     console.log("chat was saved");
//    })
//     .catch((err) => {
//         console.log(res);
//     });
  //  res.send("working");
// catch (err) {
//     next(err);
// }
}));

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    };
}

//new - show route
// app.get("/chats/:id",async(req,res,next)=>{
//     try{
//     let {id} = req.params;
//     let chat = await Chat.findById(id);
//     if(!chat) {
//       // throw new ExpressError(404,"chat not found");
//        next (new ExpressError(500,"chat not found"));
//     }
//     res.render("edit.ejs",{chat});
// } catch(err){
//   next(err);
// }
// });
app.get("/chats/:id",asyncWrap(async(req,res,next)=>{
    
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
      // throw new ExpressError(404,"chat not found");
       next (new ExpressError(500,"chat not found"));
    }
    res.render("edit.ejs",{chat});

}));

//edit route
app.get("/chats/:id/edit",asyncWrap(async(req,res)=>{
    // try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
      // console.log(chat);
        res.render("edit.ejs", {chat});
    // }
    //  catch(err) {
    //     next(err);
    // }
}));
    

//UPDATE ROUTE
app.put("/chats/:id",asyncWrap(async(req,res)=>{
    //try{
        let {id} = req.params;
        let {msg : newMsg} = req.body;
        console.log(newMsg);
        let updatedChat =await Chat.findByIdAndUpdate(id,{msg:newMsg},{runValidators:true ,new : true});
        console.log(updatedChat);
        res.redirect("/chats");
    // } catch(err){
    // next(err);
    // }
}));

//Destroy route
app.delete("/chats/:id",asyncWrap( async(req,res) => {
    // try{
        let {id} = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    // } catch(err){
    //     next(err);
    // }
   
}));

app.get("/",(req,res)=>{
    res.send("root is working");
});

const handleValidationErr = (err) =>{
    console.log("This was a validation error.Please follow rules");
    console.dir(err.message);
    return err;
}

app.use((err,req,res,next)=>{
   console.log(err.name);
   if(err.name === "ValidationError"){
  //  console.log("This was a validation error.Please follow rules");
        err = handleValidationErr(err);
   }
   next(err);
});

//error handling middleware
app.use((err,req,res,next)=>{
    let {status = 500,message = "some error occurred"} = err;
    res.status(status).send(message);
});

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});

