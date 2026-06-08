import React from 'react'

const CompleteTask = ({ data }) => {
  if (!data) return null
  
  return (
    // Clean unified blueprint root wrapper with fluid light/dark style tokens
    <div className='w-full sm:w-[320px] min-h-[340px] flex-shrink-0 flex flex-col justify-between bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 p-6 rounded-2xl shadow-xs transition-all duration-300 relative overflow-hidden opacity-90 group'>
      
      {/* Decorative colored top line anchoring this item as a success state */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-emerald-500 to-teal-500" />

      {/* Primary Display Data Bundle */}
      <div>
        <div className='flex justify-between items-center gap-4 mb-4'>
            {/* Soft background green success category pill */}
            <span className='bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-lg border border-emerald-500/10'>
                {data?.category || 'General'}
            </span>
            <span className='text-xs font-semibold text-slate-400 dark:text-slate-500 transition-colors'>
                {data?.taskDate}
            </span>
        </div>

        {/* Content Details Header Block */}
        <h1 className='font-bold text-lg text-slate-700 dark:text-slate-300 tracking-tight leading-snug mb-2 line-through opacity-75 transition-colors'>
            {data?.taskTitle}
        </h1>
        
        <p className='text-sm text-slate-400 dark:text-slate-500 leading-relaxed line-clamp-4 transition-colors'>
            {data?.taskDescription}
        </p>
      </div>

      {/* Bottom Status Block:
        Using a clean non-actionable status capsule marks the project pipeline sequence as complete.
      */}
      <div className='w-full mt-6'>
          <div className='w-full text-center text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 cursor-default'>
              ✓ Task Completed
          </div>
      </div> 
          
    </div>
  )
}

export default CompleteTask