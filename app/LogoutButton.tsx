'use client'

import React from 'react'
import {signOut} from 'next-auth/react'

export default function LogoutButton(){

    return(
        <button
        onClick={()=>signOut()}
        className='bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md'>
            Logout
        </button>
    )
}