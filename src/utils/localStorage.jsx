

const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "emp@g.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Dashboard",
        taskDescription: "Implement employee statistics cards.",
        taskDate: "2026-06-05",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve authentication issue.",
        taskDate: "2026-06-02",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write API Docs",
        taskDescription: "Document all employee endpoints.",
        taskDate: "2026-06-08",
        category: "Documentation"
      }
    ]
  },

  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@company.com",
    password: "123",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create responsive homepage layout.",
        taskDate: "2026-06-06",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Logo Revision",
        taskDescription: "Update company logo colors.",
        taskDate: "2026-06-01",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Client Mockup",
        taskDescription: "Prepare UI mockup for client.",
        taskDate: "2026-05-30",
        category: "Design"
      }
    ]
  },

  {
    id: 3,
    name: "Aman Singh",
    email: "aman.singh@company.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Perform weekly backup.",
        taskDate: "2026-06-07",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Queries",
        taskDescription: "Improve query performance.",
        taskDate: "2026-06-09",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Data Migration",
        taskDescription: "Migrate old records.",
        taskDate: "2026-05-28",
        category: "Database"
      }
    ]
  },

  {
    id: 4,
    name: "Neha Gupta",
    email: "neha.gupta@company.com",
    password: "123",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Testing Module",
        taskDescription: "Test employee dashboard.",
        taskDate: "2026-06-06",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Verification",
        taskDescription: "Verify reported bugs.",
        taskDate: "2026-06-03",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Automation Script",
        taskDescription: "Create testing automation.",
        taskDate: "2026-05-31",
        category: "Testing"
      }
    ]
  },

  {
    id: 5,
    name: "Arjun Kumar",
    email: "arjun.kumar@company.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy Application",
        taskDescription: "Deploy latest build to production.",
        taskDate: "2026-06-10",
        category: "DevOps"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Server Monitoring",
        taskDescription: "Monitor server health.",
        taskDate: "2026-06-08",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SSL Renewal",
        taskDescription: "Renew SSL certificates.",
        taskDate: "2026-06-01",
        category: "Security"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    name: "Admin",
    email: "admin@gmail.com",
    password: "123"
  }
];

export { employees, admin };


export const setLocalStorage = () => {
  

  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));

};

export const getLocalStorage = ()=>{

  const employees= JSON.parse(localStorage.getItem("employees"))
    const admin= JSON.parse(localStorage.getItem("admin"))
    return {employees,admin}

}