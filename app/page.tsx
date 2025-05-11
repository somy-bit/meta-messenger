import React from 'react'
import MessegesList from './MessegesList'
import ChatInput from './ChatInput'
import { Message } from '@/typings';
import Provider from './providers'
import { getServerSession } from 'next-auth/next'


export default async function Home() {

    const session = await getServerSession();
console.log("session .....",session)
var messegs :Message[]=[]
try{
   const data = await fetch(process.env.FETCH_URL!)
        .then(res => res.json())
         messegs = data.messeges;
}catch(error){
    console.log("error","........................"+error)
}
 

    
    return (
        <Provider session={session!}>
            <main>
                {/* message list */}
                <MessegesList initialMesseges={messegs} />
                {/* input message */}
                <ChatInput session={session!} />
            </main>
        </Provider>
    )
}
