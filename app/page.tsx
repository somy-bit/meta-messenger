import React from 'react'
import MessegesList from './MessegesList'
import ChatInput from './ChatInput'
import { Message } from '@/typings';
import Provider from './providers'
import { getServerSession } from 'next-auth/next'


export default async function Home() {

    const session = await getServerSession();

    const data = await fetch('http://127.0.0.1:3000/api/getMesseges')
        .then(res => res.json())

    const messegs: Message[] = data.messeges;
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
