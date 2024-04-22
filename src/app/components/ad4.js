"use client"
import {useEffect} from "react"
export default function Ad4() {
	useEffect(()=>{
		setTimeout(() => {
            loadAll()
		}, 500);
	},[])
	return(
		<div className="ad4"></div>
	)
}
