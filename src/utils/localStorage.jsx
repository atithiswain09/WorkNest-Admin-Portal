
const cpemployees = [
{
  "employees": [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Prepare weekly report",
          "description": "Collect all sales data and prepare the weekly performance report.",
          "date": "2025-01-10"
        },
        { 
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Update client records",
          "description": "Verify and update records in the CRM system.",
          "date": "2025-01-05"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Follow up with leads",
          "description": "Send follow-up emails to all pending leads.",
          "date": "2025-01-07"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Design homepage layout",
          "description": "Create a modern and clean layout for the home page UI.",
          "date": "2025-01-09"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Fix navbar bug",
          "description": "Resolve the issue where the navbar collapses unexpectedly.",
          "date": "2025-01-06"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Optimize images",
          "description": "Compress and optimize all landing page images.",
          "date": "2025-01-03"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Database backup",
          "description": "Perform a full backup of the production database.",
          "date": "2025-01-11"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Create API documentation",
          "description": "Document all available endpoints for developer use.",
          "date": "2025-01-08"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Server patch update",
          "description": "Apply security patch to main server.",
          "date": "2025-01-04"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Social media campaign",
          "description": "Plan and schedule posts for weekly marketing campaign.",
          "date": "2025-01-12"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Product description writing",
          "description": "Write descriptions for new products in the catalog.",
          "date": "2025-01-06"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Campaign analytics",
          "description": "Analyze last month’s campaign performance.",
          "date": "2025-01-05"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Customer support tickets",
          "description": "Resolve pending customer issues assigned this week.",
          "date": "2025-01-10"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Call verification",
          "description": "Verify customer calls and update status.",
          "date": "2025-01-07"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Refund processing",
          "description": "Process refund requests submitted last week.",
          "date": "2025-01-03"
        }
      ]
    }
  ],

  "admin": {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
}
]

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(cpemployees[0].employees));
     localStorage.setItem('admin',JSON.stringify(cpemployees[0].admin));
}
export const getLocalStorage = () => {
     const employees = JSON.parse(localStorage.getItem('employees'));
     const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees, admin};
}
