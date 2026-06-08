import React from 'react'

const NewTask = ({ data }) => {
  if (!data) return null
  
  return (
    // Sizing and interactive classes placed securely on the root container element
    <div className='w-full sm:w-[320px] min-h-[340px] flex-shrink-0 flex flex-col justify-between bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 p-6 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 relative overflow-hidden group'>
      
      {/* Decorative colored top line indicating a fresh incoming task entry */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 to-indigo-500" />

      {/* Primary Content Group */}
      <div>
        <div className='flex justify-between items-center gap-4 mb-4'>
            {/* Soft background blue category pill */}
            <span className='bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-lg border border-blue-500/10'>
                {data?.category || 'General'}
            </span>
            <span className='text-xs font-semibold text-slate-400 dark:text-slate-500 transition-colors'>
                {data?.taskDate}
            </span>
        </div>

        {/* Title and Description Track */}
        <h1 className='font-bold text-lg text-slate-800 dark:text-white tracking-tight leading-snug mb-2 transition-colors'>
            {data?.taskTitle}
        </h1>
        
        <p className='text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-4 transition-colors'>
            {data?.taskDescription}
        </p>
      </div>

      {/* Bottom Action Section:
        Using 'mt-auto' locks this button group block cleanly to the bottom grid ceiling line.
      */}
      <div className='w-full mt-6'>
          <button className='w-full text-center text-white font-semibold text-xs tracking-wide py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-[0.97] transition-all duration-150 shadow-sm shadow-blue-500/10 cursor-pointer uppercase'>
              Accept Task
          </button>
      </div> 
          
    </div>
  )
}

export default NewTask