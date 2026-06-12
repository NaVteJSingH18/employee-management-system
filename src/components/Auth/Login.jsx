import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className='flex items-center justify-center min-h-screen px-4 overflow-hidden relative'>
            
            {/* Background Orb - adjusts opacity based on theme */}
            <div className="absolute w-[400px] h-[400px] bg-emerald-500/20 dark:bg-emerald-600/20 rounded-full blur-[100px] dark:blur-[120px] pointer-events-none"></div>
            
            {/* Card Wrapper: Clean white in light mode, Glassmorphism in dark mode */}
            <div className='relative z-10 w-full max-w-md p-8 sm:p-10 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 dark:backdrop-blur-xl rounded-3xl shadow-xl dark:shadow-2xl transition-all duration-300'>
                
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight transition-colors">Welcome Back</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm transition-colors">Please log in to your employee account</p>
                </div>

                {/* Form Section */}
                <form onSubmit={SubmitHandler} className='flex flex-col gap-6'>
                    
                    {/* Input Group: Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1 transition-colors">Email Address</label>
                        <input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            className='w-full outline-none text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-3.5 focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-500' 
                            type="email" 
                            placeholder='e.g. admin@gmail.com/emp@g.com' 
                        />
                    </div>

                    {/* Input Group: Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300 ml-1 transition-colors">Password</label>
                        <input 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className='w-full outline-none text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-3.5 focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-500'   
                            type="password"  
                            placeholder='123'
                        />
                    </div>

                    {/* Advanced Button */}
                    <button className='w-full outline-none border-none text-white font-semibold tracking-wide rounded-xl px-8 py-3.5 mt-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 active:scale-[0.98] transition-all duration-300 shadow-md hover:shadow-lg shadow-emerald-500/30'>
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;