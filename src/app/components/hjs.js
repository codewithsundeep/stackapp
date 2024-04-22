'use client'
import { useEffect } from 'react';
export default function Highlight(){
    useEffect(()=>{
        let tm = setTimeout(function(){
            hljs.highlightAll()
            clearTimeout(tm)
        },1000)
    },[])
    return (
        <></>
    )
}