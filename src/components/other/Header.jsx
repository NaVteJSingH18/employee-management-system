import React from 'react'

const Header = ({ data }) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    window.location.reload()
  }

  return (
    // We change items-end to items-center for a clean, aligned navbar look.
    // Adding a border-b anchors the header neatly to the top of our layout grid.
    <div className='flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300'>
        <div>
          <h1 className='text-sm font-medium tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-1'>
            Welcome Back
          </h1>
          <span className='text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-white transition-colors duration-300'>
            {data?.name || 'User'} <span className="inline-block animate-wave">👋</span>
          </span>
        </div>
        
        <button 
          onClick={logOutUser} 
          className='bg-red-500 hover:bg-red-600 active:scale-[0.97] text-white text-sm font-semibold tracking-wide px-5 py-2.5 rounded-xl shadow-lg shadow-red-500/10 hover:shadow-red-500/20 transition-all duration-200'
        >
          Log Out
        </button>
    </div>
  )
}

export default Header