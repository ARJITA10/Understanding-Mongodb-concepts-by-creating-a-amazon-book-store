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
//   await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }

// // const bookSchema = new mongoose.Schema({
// //     title:String,
// //     author:String,
// //     price:Number,
// // });
// const bookSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true,
//         maxLength : 20,
//     },
//     author:{
//         type:String,
//     },
//     price:{
//         type:Number,
//         min: [1, "please enter a valid price, price is too low for amazon selling"],///custom error defined
//     },
//     discount :{
//         type: Number,
//         default : 0
//     },
//     genre : [String],
//     category : {
//         type : String,
//         enum : ["fiction","non-fiction"],
//     },
// });

// const Book = mongoose.model("book",bookSchema);
// let book1 = new Book ({
//     title:"Mathematics XII",
//     author:"RD Sharma",
//     price:1200,
// });
// book1.save()
// .then((res)=>{
//                console.log(res);
//         }).catch((err)=>{
//                console.log(err);
//         });
        
// let book2 = new Book ({
//    //error shown - book validation failed if not defined title 
//     author:"RD Sharma",
//     price:1200,
// });
// book2.save()
// .then((res)=>{
//                console.log(res);
//         }).catch((err)=>{
//                console.log(err);
//         });

// let book3 = new Book ({
//             title:"Mathematics VIII",
//         //AUTHOR VALUE CAN BE SKIPPED
//             price:1200,
//         });
//         book3.save()
//         .then((res)=>{
//                        console.log(res);
//                 }).catch((err)=>{
//                        console.log(err);
//                 });

// let book4 = new Book ({
//     title:"How to kill a Mockingbird",
//     author:"Harper Lee",
//    // price:'abcd',//error-book validation faled cast error cast to number failed to value abcd 
//     price:'299',                     //:"299" //no error - successful operation
//                          });
// book4.save().then((res)=>{
// console.log(res);
// }).catch((err)=>{
//          console.log(err);
//                         });
                    
//                         let book5 = new Book ({
//                             title:"Gone Girl",
//                             price:"399",
//                         });
// book5.save().then((res)=>{
//                                        console.log(res);
//                                 }).catch((err)=>{
//                                        console.log(err);
//                                 });

// // let book6 = new Book ({
// //     title:"Gone Girl in the soft car with her boyfriend in the jackonville crossing mile of roads in the woods of alaska ",// error - maximum length alllowed is 20 . it is longer than that
// //     price:"399",
// //     });
// //                 book6.save().then((res)=>{
// //                                                console.log(res);
// //                                         }).catch((err)=>{
// //                                                console.log(err);
// //                                         });


//                         //  let book7 = new Book ({
//                         //                     title:'Marvel Comics',
//                         //                     price:-10,//error - price  (-10) is less than minimum allowed value 1.
//                         //                 });
//                         // book7.save().then((res)=>{
//                         //                                console.log(res);
//                         //                         }).catch((err)=>{
//                         //                                console.log(err);
//                         //                         });

//                                                 let book8 = new Book ({
//                                                     title:'Marvel Comics12',
//                                                     price:200,
//                                                     category:"fiction",
//                                                     //      comics //will show error :conics is not a valid enum value for path category./
//                                                 });
//                                 book8.save().then((res)=>{
//                                                                console.log(res);
//                                                         }).catch((err)=>{
//                                                                console.log(err);
//                                                         });
    
                                        //                 let book9 = new Book ({
                                        //                     title:'Marvel Comics v2',
                                        //                     price:600,
                                                         
                                        //                     genre:["comics","superheroes","fiction"]
                                                            
                                        //                 });
                                        // book9.save().then((res)=>{
                                        //                                console.log(res);
                                        //                         }).catch((err)=>{
                                        //                                console.log(err);
                                        //                         });

// Book.findByIdAndUpdate("65b34bf2c98b41e9cbfa2087",{price : -500}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);

// Book.findByIdAndUpdate("65b34bf2c98b41e9cbfa2087",{price : -100},{runValidators:true}).then((res)=>{
//     ///error - schema rule is applied for updation as well ,path price -100 is less than minimum value 1
//     console.log(res);
// }).catch((err)=>{
//     console.log(err.errors.pric.properties.message);
// });



