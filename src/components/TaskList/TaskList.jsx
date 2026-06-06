import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  if(!data?.tasks) return null
  return (
 <div className='flex-1 min-h-0'>
<div className='overflow-x-auto overflow-y-hidden h-full flex flex-nowrap gap-5 pt-10 items-center scroll-hidden'>
{data.tasks.map((elem,idx)=>{
        if(elem.active) return <AcceptTask key={idx} data={elem}/>
        if(elem.newTask) return <NewTask key={idx} data={elem}/>
        if(elem.completed) return <CompleteTask key={idx} data={elem}/>
        if(elem.failed) return <FailedTask key={idx} data={elem}/>
})}
      </div>
    </div>
  )
}

export default TaskList
