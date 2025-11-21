const cpemployees = [
{
  "employees": [
    {
      "id": 1,
      "name": "Rahul Sharma",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 2,
      "name": "Priya Gupta",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 3,
      "name": "Aman Verma",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": {
        "active": 1,
        "newTask": 1,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 4,
      "name": "Sneha Arora",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 5,
      "name": "Vikas Yadav",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      }
    }
  ],

  "admin": {
    "id": 1,
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "123"
  }
}
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(cpemployees[0].employees));
  localStorage.setItem('admin', JSON.stringify(cpemployees[0].admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
}
