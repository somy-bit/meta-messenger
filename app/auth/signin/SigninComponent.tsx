'use client'

import React from 'react'
import {getProviders,signIn} from 'next-auth/react'

type Props={
    //how to get type of an unknown object
    providers : Awaited<ReturnType<typeof getProviders>>
}


function SigninComponent({providers}:Props) {
  return (
    <div>
      {Object.values(providers!).map(provider=>
      (
      <div className='' key={provider.name}>
        <button
             className='p-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-400'
             onClick={()=>signIn(provider.id,
            {callbackUrl:'http://localhost:3000'||process.env.VERCEL_URL})}>sign in with {provider.name}</button>
      </div>
      )
      )}
    </div>
  )
}

export default SigninComponent
