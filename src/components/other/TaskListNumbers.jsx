import React from 'react'

const TaskListNumbers = ({ data }) => {
  if (!data?.taskCounts) return null

  // We map out the card styling properties cleanly into an array configuration.
  // This keeps our JSX ultra-clean and easy to maintain or expand later!
  const metrics = [
    {
      title: "New Tasks",
      count: data.taskCounts.newTask || 0,
      // Premium Soft Colors: Blue theme for fresh entries
      styles: "bg-blue-50/60 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400"
    },
    {
      title: "Accepted Tasks",
      count: data.taskCounts.active || 0,
      // Amber/Yellow theme for active work-in-progress items
      styles: "bg-amber-50/60 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/20 text-amber-600 dark:text-amber-400"
    },
    {
      title: "Completed Tasks",
      count: data.taskCounts.completed || 0,
      // Emerald theme for success states
      styles: "bg-emerald-50/60 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Failed Tasks",
      count: data.taskCounts.failed || 0,
      // Rose/Red theme for failed or blocked items
      styles: "bg-rose-50/60 dark:bg-rose-500/10 border-rose-100 dark:border-rose-500/20 text-rose-600 dark:text-rose-400"
    }
  ]

  return (
    // Replaced flex wrappers with an adaptive CSS Grid structure.
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className={`relative overflow-hidden flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:shadow-md ${metric.styles}`}
        >
          {/* Subtle design element: Background accent glow for premium depth inside the card */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-current opacity-[0.03] rounded-full pointer-events-none" />
          
          <span className="text-3xl sm:text-4xl font-bold tracking-tight mb-1">
            {metric.count}
          </span>
          <span className="text-sm font-semibold uppercase tracking-wider opacity-85">
            {metric.title}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumbers