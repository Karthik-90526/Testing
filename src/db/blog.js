
const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost/my_database');
const schema = new mongoose.Schema({
    
    displayName:String,
    email:String,
});
const Blog =mongoose.model('apps',schema);
module.exports=Blog;

/*
const createDocument =async()=>{
    try{
    const reactschema = new kl({
        Name:"reddy",
        phoneno:86886,
        Country:"India"
    
    })
    const result = await reactschema.save();
    console.log(result);
}
catch(err){
    console.log(err);
}

}

createDocument();
*/


