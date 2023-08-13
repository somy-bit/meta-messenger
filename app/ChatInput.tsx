'use client'
import { Message } from '@/typings';
import React,{unstable_SuspenseList, useState} from 'react'
import {v4 as uuid} from 'uuid'
import useSWR from 'swr'
import fetcher from '@/utils/fetchMesseges';
import { getServerSession } from 'next-auth/next';

type Props={

  session : Awaited<ReturnType<typeof getServerSession>>
}

function ChatInput({session}:Props) {

    const[message,setMessage] = useState<string>();

    
    const {data:allMesseges , error , mutate} = useSWR('/api/getMesseges',fetcher);

    const sendMessage = async(e :any)=>{
        e.preventDefault();

        if(!message) return

        const msg = message;
        setMessage('')
        

        const id = uuid();

        const mesage:Message = {
            id,
            createdAt:Date.now(),
            messege : msg,
            //@ts-ignore
            username :session.user?.name,
            //@ts-ignore
            profilePic:session.user?.image,
            //@ts-ignore
            email:session.user?.email
        }

        const uploadMessageToUpstash = async()=>{

            const data = await fetch('/api/addMessege',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({mesage})
            }).then(res=>res.json())

            const gmessege = data.message
            console.log("data>>>>" , data)
            return [...allMesseges!,gmessege]
            
        }

        await mutate(uploadMessageToUpstash,{
          optimisticData:[...allMesseges!,mesage],
          rollbackOnError:true
        })
        

       
    }

  return (
    <form onSubmit={sendMessage} className='flex  bg-white px-1 w-full py-3 fixed bottom-0'>
      <input type='text'   
             placeholder='enter message ..'
             className='flex-1 px-2 rounded border border-gray-300 focus:outline-none
                     focus:ring-2 focus:ring-blue-500 focus:border-transparent '
             value={message}
             onChange={e=>setMessage(e.target.value)}        
                     />

      <button disabled={!message} className='px-5 py-3  text-white bg-blue-600 rounded 
      disabled:cursor-not-allowed disabled:opacity-50'>send</button>
    </form>
  )
}

export default ChatInput
