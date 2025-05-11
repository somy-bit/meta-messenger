// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import redis from '@/redis';
import { Message } from '@/typings';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  messeges: Message[]
}

type ErrorData = {
  body: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== 'GET') {
    res.status(405).json({ body: 'method not allowed' });
    return;
  }

  const data = await redis.hvals('messeges')

  if (data.length > 0) {
    const messeges: Message[] = data.map(msg => JSON.parse(msg))
      .sort((b, a) => b.createdAt - a.createdAt)

    return res.status(200).json({ messeges })
  }


  return res.status(200).json({ messeges: [] })
}


