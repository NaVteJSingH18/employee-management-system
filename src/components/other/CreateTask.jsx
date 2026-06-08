import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { setLocalStorage } from '../../utils/localStorage'

const CreateTask = () => {

    const authData = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        // Validate form fields
        if (!taskTitle || !taskDescription || !taskDate || !asignTo || !category) {
            alert('Please fill all fields')
            return
        }

        const newTaskObj = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false }

        // Get current employees from localStorage
        const employeesData = JSON.parse(localStorage.getItem('employees')) || authData?.employees || []

        // Find and update the employee
        let taskAssigned = false
        employeesData.forEach((elem) => {
            if (asignTo.trim() === elem.name) {
                elem.tasks.push(newTaskObj)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
                taskAssigned = true
            }
        })

        if (!taskAssigned) {
            alert('Employee not found! Please enter correct employee name.')
            return
        }
        
        // Save updated data back to localStorage
        localStorage.setItem('employees', JSON.stringify(employeesData))
        console.log('Task created:', newTaskObj)

        // Reset form
        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
        alert('Task created successfully!')
    }

    return (
        // The card switches from clean white to translucent glassmorphism dynamically
        <div className='bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 shadow-sm p-6 sm:p-8 rounded-2xl transition-all duration-300'>
            
            <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">Create New Task</h2>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Assign a brand new assignment directly to a team member</p>
            </div>

            <form onSubmit={submitHandler} className='w-full'>
                {/* Instead of manual widths, we group the content block inside an adaptive grid.
                  - grid-cols-1: Single column pattern for mobile.
                  - lg:grid-cols-2: Two side-by-side panels once layout width passes 1024 pixels.
                */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                    
                    {/* Left Column Input Cluster */}
                    <div className='flex flex-col gap-4 w-full'>
                        <div className="flex flex-col gap-1.5">
                            <label className='text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1'>Task Title</label>
                            <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className='w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500' 
                                type="text" 
                                placeholder='e.g., Optimize Database Architecture'
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className='text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1'>Due Date</label>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                className='w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 dark:[color-scheme:dark]' 
                                type="date" 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className='text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1'>Assign To</label>
                            <input
                                value={asignTo}
                                onChange={(e) => setAsignTo(e.target.value)}
                                className='w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500' 
                                type="text" 
                                placeholder='Employee name' 
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className='text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1'>Category</label>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className='w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500' 
                                type="text" 
                                placeholder='Design, Development, QA, etc.' 
                            />
                        </div>
                    </div>

                    {/* Right Column Description & Action Section */}
                    <div className='flex flex-col gap-1.5 w-full h-full justify-between'>
                        <div className="flex flex-col gap-1.5 h-full">
                            <label className='text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1'>Task Description</label>
                            <textarea 
                                value={taskDescription}
                                onChange={(e) => setTaskDescription(e.target.value)} 
                                className='w-full lg:h-[268px] min-h-[120px] text-sm py-3 px-4 rounded-xl outline-none bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:border-emerald-500 dark:focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none' 
                                placeholder='Provide detailed guidelines regarding this task execution expectation...'
                            />
                        </div>

                        {/* Complete action submit block with micro-interaction hover curves */}
                        <button className='w-full outline-none border-none text-white font-semibold tracking-wide text-sm rounded-xl px-6 py-3.5 mt-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 active:scale-[0.98] transition-all duration-200 shadow-md shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer'>
                            Create Task
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CreateTask