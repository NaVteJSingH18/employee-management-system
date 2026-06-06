import React from 'react'

const TaskListNumbers = ({data}) => {
  if(!data?.taskCounts) return null
  return (
    <div>
          <div className='flex pt-10  justify-between gap-5   '>
        <div className='px-9 py-6 w-[45%] text-white bg-red-300  flex flex-col text-3xl rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data?.taskCounts?.newTask || 0}</h2>
      <h3 className='text-xl font-medium'>new task</h3>
        </div>
        <div className='px-9 py-6 w-[45%] text-white bg-blue-700  flex flex-col text-3xl rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data?.taskCounts?.completed || 0}</h2>
      <h3 className='text-xl font-medium'>Completed task</h3>
        </div>
        <div className='px-9 py-6 w-[45%] text-white bg-green-600  flex flex-col text-3xl rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data?.taskCounts?.active || 0}</h2>
      <h3 className='text-xl font-medium'>Accepted task</h3>
        </div>
        <div className='px-9 py-6 w-[45%] text-white bg-fuchsia-700  flex flex-col text-3xl rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data?.taskCounts?.failed || 0}</h2>
      <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
      

    </div>
    </div>
  )
}

export default TaskListNumbers
