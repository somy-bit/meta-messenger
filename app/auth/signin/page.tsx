 import React from 'react'
 import {getProviders,signIn} from 'next-auth/react'
 import Image from 'next/image'
import SigninComponent from './SigninComponent'
 
 async function  SignIgPage() {

    const providers =await getProviders()
    console.log('provider>>>>s',providers)
   return (
     <div className='flex flex-col space-y-4 items-center justify-center h-screen bg-white'>
       <Image 
       className='object-cover mx-2 w-96 h-96 rounded-full'
       src='https://links.papareact.com/161'
       alt='prof pic'
       width={700}
       height={700}/>
        <SigninComponent providers={providers}/>
     </div>

    
   )
 }
 
 export default SignIgPage
 
