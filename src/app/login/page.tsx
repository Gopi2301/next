"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from 'next/navigation'
import {axios} from "axios";

export default function LoginPage(){
    const [user, setUser]=React.useState({
        email:'',
        password:'',
    })
    const onLogin=()=>{}
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Login</h1>
        <hr/>
        
       <label htmlFor="email">email</label>
       <input className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="text" id="email" value={user.email} onChange={(e)=>setUser({...user, email:e.target.value})} placeholder="email"/>
       <label htmlFor="password">password</label>
       <input className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="password" id="password" value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})} placeholder="password"/>
       <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none" type="submit">Login Here</button>
       <Link href='/signup'>Visit SignUp Page</Link>
       </div>
    )
}