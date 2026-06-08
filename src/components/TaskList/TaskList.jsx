import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  if (!data?.tasks || data.tasks.length === 0) {
    return (
      // Clean fallback empty state box if an employee has zero tasks
      <div className="w-full text-center py-12 px-4 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl transition-colors duration-300">
        <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">No tasks assigned to your log currently.</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-4 mt-6'>
      {/* Title block for the section context */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">Your Task Board</h2>
        <p className="text-slate-500 dark:text-slate-400 text-xs">Swipe horizontally to manage and track your assigned deliverables</p>
      </div>

      {/* Horizontal Deck Component:
        - overflow-x-auto: Activates native swipe tracks.
        - pb-4: Extra bottom buffer padding prevents card shadows from clipping during horizontal scrolling animations.
        - scroll-smooth: Adds fluid, smooth scrolling steps across viewports.
      */}
      <div className='overflow-x-auto scroll-hidden w-full flex flex-nowrap gap-5 pb-4 items-stretch scroll-smooth'>
        {data.tasks.map((elem, idx) => {
            if (elem.active) return <AcceptTask key={idx} data={elem}/>
            if (elem.newTask) return <NewTask key={idx} data={elem}/>
            if (elem.completed) return <CompleteTask key={idx} data={elem}/>
            if (elem.failed) return <FailedTask key={idx} data={elem}/>
            return null
        })}
      </div>
    </div>
  )
}

export default TaskList