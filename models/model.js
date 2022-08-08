import { model, models } from 'mongoose';
var mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {type: String,unique:true,null:true,required: true},
  password:{ type: String,null:true,required: true}
});

const UserDB =  models.UserDB  || model('UserDB', userSchema);

export default UserDB;