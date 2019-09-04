const mongoose = require('mongoose');
//Define a schema
mongoose.pluralize(null);
const Schema = mongoose.Schema;
const customerSchema = new Schema({
 name: {
  type: String,  
  required: true,
  unique:true,
 },
 address:{
     type:String,
     required:true,
 },
 city:{
     type:String,
 },
 contactNumber :{
     type:String,
 },
 state:{
     type:String,
 },
 zip:{
     type:Number,
 },
 country:{
     type:String,
 },
});
module.exports = mongoose.model('customer', customerSchema)