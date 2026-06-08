import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    // Removed absolute dark background and fixed screen height to let parent layout rules shine.
    // Swapped monolithic padding for mobile-responsive utility padding blocks (p-4 changing to p-8).
    <div className='min-h-screen px-4 py-6 sm:px-8 sm:py-10 transition-colors duration-300'>
        
        {/* Semantic Layout Container limits max-width on large displays preventing content stretching */}
        <div className='max-w-7xl mx-auto flex flex-col gap-8'>
            <Header data={props.data} />
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data} />
        </div>
        
    </div>
  )
}

export default EmployeeDashboard