'use client'

import React, { useEffect,useState } from 'react'
import {getProviders,signIn} from 'next-auth/react'

type Props={
    //how to get type of an unknown object
    providers : Awaited<ReturnType<typeof getProviders>>
}


function SigninComponent() {

  const [providers,setProviders] = useState<Awaited<ReturnType<typeof getProviders>>>(null);

  useEffect(()=>{

    const getProv = async()=>{

       const provid = await getProviders();
       console.log('providers>>>>>>>>>>>>>>>',provid)
       setProviders(provid)

    }
    getProv();

  },[])
  return (
    <div>
      {providers && Object.values(providers!).map(provider=>
      (
      <div className='flex flex-col justify-center items-center space-y-3' key={provider.name}>
        <button
             className='p-4 bg-blue-700 text-white rounded-lg font-semibold  hover:bg-blue-400'
             onClick={()=>signIn(provider.id,
            {callbackUrl:'http://127.0.0.1:3000'})}>sign in with {provider.name}</button>
      </div>
      )
      )}
    </div>
  )
}

export default SigninComponent
