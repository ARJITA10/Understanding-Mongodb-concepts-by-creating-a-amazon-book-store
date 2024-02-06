// const mongoose = require('mongoose');
// //let url = "https://localhost:8080/users"
// //mongoose.connect('mongodb://127.0.0.1:27017/test');
// main()
//     .then ((res) => {
//      //console.log(res);
//      console.log("connection successful");
// })
// .catch(err => console.log(err));
// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     age:Number,
// }); 

// const User = mongoose.model("User",userSchema);
//insert one
//const Employee = mongoose.model("Employee",userSchema);
// const user1 = new User({
//     name:"Adam",
//     email:"adam@yahoo.in",
//     age:48,
// });
// insert multiple
// User.insertMany([
//     {name:"Tony", email:"tony@yahoo.in",age:50},
//     {name:"Peter", email:"peter@yahoo.in",age:30},
//     {name:"Bruce", email:"bruce@yahoo.in",age:47},
// ]).then((res)=>{
//     console.log(res);
// });
//find function
// User.find({age: {$gt:47}}).then((res)=>{
//     //console.log(res);
//     console.log(res[0]);
//     console.log(res[0].name);
// }).catch((err)=>{
//     console.log(err);
// });
// User.findOne({age: {$gt:47}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
// //bruce user need to be searched with its id
// User.findOne({_id:'65b2526ee2baaaa65afd66f2'}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
// User.findById('65b2526ee2baaaa65afd66f2').then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });
//update function
// User.updateOne({name:"Bruce"},{age:49}).then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     });
// User.updateMany({age:{$gt:48}},{age:55}).then((res)=>{
//         console.log(res);
//  }).catch((err)=>{
//         console.log(err);
//  });
 //find first and update
//  User.findOneAndUpdate({name:"Bruce"},{age:35})
// .then((res)=>{
//         console.log(res);
//  }).catch((err)=>{
//         console.log(err);
//  });
//  User.findOneAndUpdate({name:"Bruce"},{age:42},{new: true})
//  .then((res)=>{
//          console.log(res);
//   }).catch((err)=>{
//          console.log(err);
//   });
//   User.findByIdAndUpdate('65b2526ee2baaaa65afd66f2',{age:52},{new: true})
//   .then((res)=>{
//           console.log(res);
//    }).catch((err)=>{
//           console.log(err);
//    });
  //delete
//   User.deleteOne({name:"Bruce"})
//   .then((res)=>{
//           console.log(res);
//    }).catch((err)=>{
//           console.log(err);
//    });
// User.deleteMany({age:48})
//   .then((res)=>{
//           console.log(res);
//    }).catch((err)=>{
//           console.log(err);
//    });
// User.findByIdAndDelete('65b2526ee2baaaa65afd66f1')
//   .then((res)=>{
//           console.log(res);
//    }).catch((err)=>{
//           console.log(err);
//    });
// User.findByIdAndDelete('65b2526ee2baaaa65afd66f1')
//   .then((res)=>{
//           console.log(res);
//    }).catch((err)=>{
//           console.log(err);
//    });
//    User.findOneAndDelete({name:"Tony"})
//    .then((res)=>{
//            console.log(res);
//     }).catch((err)=>{
//            console.log(err);
//     });
    
   
   

  
  
 
 
