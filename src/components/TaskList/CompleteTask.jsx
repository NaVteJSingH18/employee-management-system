import React from 'react'

const CompleteTask = ({data}) => {
  if(!data) return null
  return (
    <div>
                  <div className='text-white shrink-0 p-5 bg-pink-400 w-[300px] h-[300px]  rounded-xl '>
                <div className='flex justify-between  items-center'>
                    <h3 className='bg-red-700 rounded px-3 py-1 text-sm'>{data?.category}</h3>
                    <h3 className='text-sm'>{data?.taskDate}</h3>
                </div>
                <h1 className='font-semibold text-xl mt-5 ' >{data?.taskTitle}</h1>
                <p className='mt-4'>{data?.taskDescription}</p>
                <div className='mt-2'>
             <button className='w-full bg-teal-800 rounded'>Completed</button>
                </div>
            </div>
    </div>
  )
}

export default CompleteTask
