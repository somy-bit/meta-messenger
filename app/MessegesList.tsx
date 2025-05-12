'use client'

import React, { useEffect } from 'react'
import useSWR from 'swr'
import fetcher from '@/utils/fetchMesseges'
import MessegeComponent from './MessegeComponent';
import { clientPusher } from '@/pusher';
import { Message } from '@/typings';
import ScrollToBottom from './ScrollToBottom';

type Props={
    initialMesseges : Message[]
}

export default function MessegesList({initialMesseges} :Props) {

    const { data: allMesseges, error, mutate } = useSWR('/api/getMesseges', fetcher);

    useEffect(() => {

        const channel = clientPusher.subscribe('messeges');
        channel.bind('new messege', async (data: Message) => {

            if (allMesseges?.find((msg) => msg.id === data.id))
                return;

            if (!allMesseges) {
                mutate(fetcher)
            } else {

                mutate(fetcher, {
                    optimisticData: [...allMesseges, data],
                    rollbackOnError: true
                })
            }
        })

        return ()=>{
            channel.unbind_all();
            channel.unsubscribe();
        }

    }, [allMesseges, mutate])

    return (
        <div className='space-y-4 pt-5 pb-32 max-w-4xl mx-auto min-h-screen'>

            { initialMesseges.length>0 &&
                (allMesseges || initialMesseges).map(msg =>
                    <MessegeComponent key={msg.id} messege={msg} />
                )

            }
            <ScrollToBottom />
        </div>
    )
}