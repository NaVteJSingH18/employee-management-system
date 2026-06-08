import React from 'react'

const FailedTask = ({ data }) => {
  if (!data) return null
  
  return (
    // Clean unified blueprint root wrapper matching your other dashboard task cards
    <div className='w-full sm:w-[320px] min-h-[340px] flex-shrink-0 flex flex-col justify-between bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 p-6 rounded-2xl shadow-xs transition-all duration-300 relative overflow-hidden opacity-90 group'>
      
      {/* Decorative red gradient top accent line indicating a failed/overdue state */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-rose-500 to-red-500" />

      {/* Primary Display Data Bundle */}
      <div>
        <div className='flex justify-between items-center gap-4 mb-4'>
            {/* Soft background red/rose error category pill */}
            <span className='bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-lg border border-rose-500/10'>
                {data?.category || 'General'}
            </span>
            <span className='text-xs font-semibold text-slate-400 dark:text-slate-500 transition-colors'>
                {data?.taskDate}
            </span>
        </div>

        {/* Content Details Header Block */}
        <h1 className='font-bold text-lg text-slate-800 dark:text-white tracking-tight leading-snug mb-2 transition-colors'>
            {data?.taskTitle}
        </h1>
        
        <p className='text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-4 transition-colors'>
            {data?.taskDescription}
        </p>
      </div>

      {/* Bottom Status Block:
        Turned into a clean, non-actionable badge that matches enterprise tracking standards.
      */}
      <div className='w-full mt-6'>
          <div className='w-full text-center text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl bg-rose-500/10 dark:bg-rose-500/20 border border-rose-500/20 cursor-default'>
              ✕ Task Failed / Overdue
          </div>
      </div> 
          
    </div>
  )
}

export default FailedTask