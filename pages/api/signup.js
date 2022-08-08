import Head from 'next/head'
import Image from 'next/image'
import connectMongo from '../../utils/connectMongo';
import UserDB from '../../models/model';
import bcrypt from 'bcryptjs'
export const config = {
  api: {
    bodyParser: true,
  },
};
export default async function handler(req, res) {
  try {
    const{username,password}=req.body
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');
    console.log(req.body)
    console.log('CREATING DOCUMENT');
    const encrypted_pass = await bcrypt.hash(password,10)
    const user = await UserDB.create({
      username,
      password:encrypted_pass,
     })

    console.log('CREATED DOCUMENT');

    res.json({ user });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
 

