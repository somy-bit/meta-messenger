import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton';
import { getServerSession } from 'next-auth';


export default async  function Header() {
    const session = await getServerSession()

    if (session) return (
        <header className='sticky top-0 z-50 bg-white flex 
             justify-between items-center shadow-sm p-10'>
                
                <div className='flex items-center space-x-2'>
                    <Image src={session.user?.image||'https://links.papareact.com/jne'} alt='user' 
                    className='objext-cover rounded-full' width={40} height={40}/>
                    <p className='text-blue-300 font-bold'>{session.user?.name}</p>
                </div>
                <LogoutButton />
        </header>
    )

    return (
        <header className='sticky top-0 bg-white flex 
                     justify-center items-center shadow-sm p-10'>
            <div className='flex flex-col items-center space-y-5'>
                <div className='flex items-center space-x-2'>
                    <Image width={50} height={10}
                        src='https://links.papareact.com/jne'
                        className=' object-cover' alt='meta' />
                    <p className='text-blue-400'>welcome to meta messenger</p>
                </div>
                <Link className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md' href='/auth/signin'>Sign In</Link>
            </div>
        </header>
    )
}