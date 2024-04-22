"use client"
import {useEffect} from "react"
export default function Ad3() {
	useEffect(()=>{
		setTimeout(() => {
            loadAll()
		}, 500);
	},[])
	return(
		<div className="ad3"></div>
	)
}
