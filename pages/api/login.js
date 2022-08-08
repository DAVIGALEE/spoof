import Head from 'next/head'
import Image from 'next/image'


export default function handler(req, res) {
  console.log(req)
  res.status(200).json({ name: 'login' })
}

