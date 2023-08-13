 'use client'
 import React from 'react'
 import {useRef,useEffect} from 'react'
 
 export default function ScrollToBottom() {

    const elementRef = useRef();

    useEffect(() =>

    { // @ts-ignore
        elementRef?.current.scrollIntoView()});
    return(
         // @ts-ignore
        <div ref={elementRef}>
        
        </div>
    )
    
 }
 