import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({ data }) => {
    return (
        // Replaced 'h-screen w-full' with responsive 'min-h-screen' rules.
        // This ensures the page wrapper wraps around task tables smoothly as data populates.
        <div className='min-h-screen px-4 py-6 sm:px-8 sm:py-10 transition-colors duration-300'>
            
            {/* The semantic content barrier keeps dashboard elements perfectly balanced on wide desktop monitors */}
            <div className='max-w-7xl mx-auto flex flex-col gap-8'>
                
                {/* Global Navbar Header */}
                <Header data={data} />
                
                {/* Dashboard Main Body Grid Section:
                  We group these panels inside a clean flex layout with explicit spacing gaps 
                  so that your task creation engine and monitoring grid don't collide.
                */}
                <div className="flex flex-col gap-8">
                    <CreateTask />
                    <AllTask />
                </div>
                
            </div>
        </div>
    )
}

export default AdminDashboard