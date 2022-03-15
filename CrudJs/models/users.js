/*
    This file defines the Schema of an user object
*/
const mongoose =require('mongoose')
const Joi=require('joi');
const validator=require('email-validator');

const userSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.validate(value)){
                throw new Error('Not a valid email! ')
            }
        }
    },
    password:{
        type:String,
        required:true
    },
    
})

// const validate=(user)=>{
//     const schema=Joi.object({
//         firstName:Joi.string().required,
//         lastName:Joi.string().required,
//         email:Joi.string.email().required(),
//         password:Joi.string().required()


//     })
//     return schema.validate(user)
//}

//module.exports={userSchema,validate};
module.exports= mongoose.model('User',userSchema);