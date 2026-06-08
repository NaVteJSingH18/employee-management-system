import React from 'react'

const AcceptTask = ({ data }) => {
  if (!data) return null
  
  return (
    // FIX: Sizing constraints moved to absolute root element wrapper.
    // flex-shrink-0 ensures cards keep their horizontal block shapes in the scrolling timeline track.
    <div className='w-full sm:w-[320px] min-h-[340px] flex-shrink-0 flex flex-col justify-between bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 p-6 rounded-2xl shadow-xs transition-all duration-300 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 relative overflow-hidden group'>
      
      {/* Decorative colored corner bar indicating this item is actively in progress */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-amber-500 to-amber-400" />

      {/* Top Information Row */}
      <div>
        <div className='flex justify-between items-center gap-4 mb-4'>
            {/* Soft background category tag pill */}
            <span className='bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-lg border border-amber-500/10'>
                {data?.category || 'General'}
            </span>
            <span className='text-xs font-semibold text-slate-400 dark:text-slate-500 transition-colors'>
                {data?.taskDate}
            </span>
        </div>

        {/* Content Block */}
        <h1 className='font-bold text-lg text-slate-800 dark:text-white tracking-tight leading-snug mb-2 transition-colors'>
            {data?.taskTitle}
        </h1>
        
        {/* line-clamp-3 restricts height overflow safely while keeping summaries clean */}
        <p className='text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-4 transition-colors'>
            {data?.taskDescription}
        </p>
      </div>

      {/* Dynamic Operational Actions Layer:
        Using a clean grid system layout distributes the call-to-actions perfectly evenly across the bottom.
      */}
      <div className='flex flex-col sm:flex-row items-center gap-3 mt-6 w-full'>
          <button className='w-full text-center bg-emerald-500 hover:bg-emerald-600 active:scale-[0.97] text-white font-semibold text-xs tracking-wide py-2.5 px-4 rounded-xl transition-all duration-150 shadow-sm shadow-emerald-500/10 cursor-pointer'>
              Complete
          </button>
          <button className='w-full text-center bg-slate-100 hover:bg-rose-500 hover:text-white dark:bg-slate-900/60 dark:hover:bg-rose-500/20 text-slate-600 dark:text-slate-400 dark:hover:text-rose-400 active:scale-[0.97] font-semibold text-xs tracking-wide py-2.5 px-4 rounded-xl border border-slate-200/60 dark:border-slate-800 dark:hover:border-rose-500/30 transition-all duration-150 cursor-pointer'>
              Mark Failed
          </button>
      </div> 
          
    </div>
  )
}

export default AcceptTask