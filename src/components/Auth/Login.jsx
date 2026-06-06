import React from 'react'
import { useState } from 'react';

const Login = ({handleLogin}) => {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
    const SubmitHandler =(e)=>{
        e.preventDefault();
        handleLogin(email,password);
     
        setEmail("");
        setPassword("")
    }
    
  return (
    <div className='h-full m-auto mt-40 w-full flex justify-center items-center'>
      <div className='  border-2 border-emerald-600  p-15 rounded-2xl '>
        <form onSubmit={(e)=>{
            SubmitHandler(e)
        }} className='flex flex-col justify-center items-center '>
               <input value={email} onChange={(e)=>{

                setEmail(e.target.value)
               }} required className=' outline-none  text-white border-2 rounded-full px-8 py-3 bg-transparent   border-emerald-600 placeholder:text-gray-400' type="email"placeholder='Enter Your Email' />
               <input value={password} onChange={(e)=>{

                setPassword(e.target.value)
               }} required className='outline-none text-white border-2 rounded-full px-8 py-3 bg-transparent   border-emerald-600 placeholder:text-gray-400 mt-3'   type="Password"  placeholder='password'/>
               <button className='outline-none border-none text-white  rounded-full px-24 py-3   bg-emerald-600  mt-8'  >Log In</button>
        </form>
        
      </div>
    </div>
  )
}

export default Login
