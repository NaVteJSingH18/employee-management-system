import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
   const authData = useContext(AuthContext)

  return (
    // Card Container switches beautifully from clean white to translucent glassmorphism
    <div className='bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 shadow-sm p-6 rounded-2xl transition-all duration-300'>
        
        {/* Header Section */}
        <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">Employee Task Ledger</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs">Real-time breakdown of current task distributions across your entire workforce</p>
        </div>

        {/* The Overflow Guard allows mobile users to scroll through table data horizontally without breaking your page width */}
        <div className="overflow-x-auto scroll-hidden -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="min-w-[700px]">
                
                {/* Clean, Non-Saturated Table Header Bar */}
                <div className='bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 mb-3 py-3 px-5 flex justify-between items-center rounded-xl transition-colors duration-300'>
                    <h2 className='text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-1/5'>Employee Name</h2>
                    <h3 className='text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-1/5 text-center'>New Task</h3>
                    <h5 className='text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-1/5 text-center'>Active Task</h5>
                    <h5 className='text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-1/5 text-center'>Completed</h5>
                    <h5 className='text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-1/5 text-center'>Failed</h5>
                </div>

                {/* Main Data Population Track */}
                <div className='flex flex-col gap-2.5'>
                    {authData?.employees?.map((elem, idx) => {
                        return (
                            <div 
                                key={idx} 
                                className='border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/20 hover:bg-slate-50 dark:hover:bg-slate-900/40 py-3.5 px-5 flex justify-between items-center rounded-xl transition-all duration-200 shadow-xs'
                            >
                                {/* Name Column */}
                                <h2 className='text-sm font-semibold text-slate-700 dark:text-slate-200 w-1/5 transition-colors'>
                                    {elem.name}
                                </h2>
                                
                                {/* New Task Counter - Muted Blue Pill */}
                                <div className='w-1/5 flex justify-center'>
                                    <span className='text-sm font-bold min-w-10 text-center px-3 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10'>
                                        {elem.taskCounts.newTask}
                                    </span>
                                </div>
                                
                                {/* Active Task Counter - Muted Amber Pill */}
                                <div className='w-1/5 flex justify-center'>
                                    <span className='text-sm font-bold min-w-10 text-center px-3 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/10'>
                                        {elem.taskCounts.active}
                                    </span>
                                </div>
                                
                                {/* Completed Task Counter - Muted Emerald Pill */}
                                <div className='w-1/5 flex justify-center'>
                                    <span className='text-sm font-bold min-w-10 text-center px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/10'>
                                        {elem.taskCounts.completed}
                                    </span>
                                </div>
                                
                                {/* Failed Task Counter - Muted Rose Pill */}
                                <div className='w-1/5 flex justify-center'>
                                    <span className='text-sm font-bold min-w-10 text-center px-3 py-1 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/10'>
                                        {elem.taskCounts.failed}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    </div>
  )
}

export default AllTask