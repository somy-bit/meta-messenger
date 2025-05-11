// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serverPusher } from '@/pusher';
import redis from '@/redis';
import { Message } from '@/typings';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: Message
}

type ErrorData ={
    body:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if(req.method !== 'POST') {
    res.status(405).json({body:'method not allowed'});
     return;
  }
  const {mesage} = req.body;
  
  const newMessege = {
    ...mesage,createdAt:Date.now()
  }

 await redis.hset("messeges",mesage.id,JSON.stringify(newMessege))
 serverPusher.trigger('messeges','new messege',newMessege)

 return  res.status(200).json({message: newMessege})
}


