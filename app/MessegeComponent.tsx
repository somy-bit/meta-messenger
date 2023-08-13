import { Message } from '@/typings'
import Image from 'next/image'
import React from 'react'
import {useSession} from 'next-auth/react'

type Props = {
    messege: Message
}

function MessegeComponent({ messege }: Props) {

    const {data : session} = useSession();

    const isUser = session?.user?.email === messege.email;
    return (
        <div >
            <div className={`flex w-fit ${isUser && 'ml-auto'} `}>
                <div className={`flex-shrink-0 ${isUser && 'order-2'}`}>
                     <Image src={messege.profilePic} alt='' width={50} height={10}
                    className='object-cover mx-2 rounded-full w-10 h-10' />
                </div>
               
                <div className={`flex flex-col max-w-md ${isUser? 'items-end' : 'items-start'}`}>
                    <p className='bg-blue-400 rounded-lg p-3  text-white'>{messege.messege}</p>
                    <p className='text-xs text-gray-400 font-light mr-2'>{new Date(messege.createdAt).toLocaleTimeString().substring(0,new Date(messege.createdAt).toLocaleTimeString().length-6)}</p>
                </div>
            </div>
        </div>
    )
}

export default MessegeComponent
