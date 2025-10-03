# Task-Manager

The outputs of all tasks of Task Manager assignment.

## Task 1: Data Type and variables

The out put of Student Data

```
{
  id: "NA-7B3469",
  name: 'Bijon Saha',
  birthMonth: 4,
  favoriteColor: 'Black'
}
```

## Task 2: Task object Constructor

The output of Constructor.

```
Task {
  id: 'NA-7B3469 + 1758903320770',
  description: 'This is an assignment',
  priority: 1,
  completed: true,
  createdDate: 2025-09-26T16:15:20.770Z,
  dueDate: 2023-12-31T00:00:00.000Z,
  category: 'School'
}
```

## Task 3 : Functions

- **Output of createTask function:**
  This function is used to create new tasks for a user.

```
All tasks:  [
  Task {
    id: 'NA-7B3469 + 1759497755494',
    title: "Bijon's Task Manager",
    description: 'This is an assignment',
    priority: 1,
    completed: true,
    createdDate: 2025-10-03T13:22:35.494Z,
    dueDate: 2023-12-31T00:00:00.000Z,
    category: 'School'
  },
  Task {
    id: 'NA-7B3469 + 1759497755494',
    title: 'Task 2',
    description: 'This is task 2',
    priority: 3,
    completed: false,
    createdDate: 2025-10-03T13:22:35.494Z,
    dueDate: 2023-11-30T00:00:00.000Z,
    category: 'Work'
  },
  Task {
    id: 'NA-7B3469 + 1759497755494',
    title: 'Task 3',
    description: 'This is task 3',
    priority: 4,
    completed: true,
    createdDate: 2025-10-03T13:22:35.494Z,
    dueDate: 2023-10-31T00:00:00.000Z,
    category: 'Personal'
  }
]
```

- **Output of deleteTask function:**
  This function is work for delete all tasks by using its id. By using this fuction you can delete the completed tasks. 

```
After deleting:  [
  Task {
    id: 'NA-7B3469 + 1759498586435',
    title: 'Task 2',
    description: 'This is task 2',
    priority: 3,
    completed: false,
    createdDate: 2025-10-03T13:36:26.435Z,
    dueDate: 2023-11-30T00:00:00.000Z,
    category: 'Work'
  }
]
```

- Display Tasks by category:
  This function mainly shows all the tasks of same category.

```
Displaying tasks by category: Work
ID: 131028 + 1758950272537, Title: Task 1, Due: Sun Dec 31 2023, Completed: false
```

## Arrow Function: calculate the percentage

This arrow func calculatae the percentage of completed task. In this code there are three created task task a, b and c. in the arrow function, I declare task a and b as complete. so the output is,

```
Completed Tasks: 66.67%
```

# Task 4: Loops:

In this tasks, I show all the tasks created at my birthday month. Here is the output:

```
Tasks due in birthday month:
ID: 131028 + 1759037530674, Title: Task 1, Due: Sun Dec 31 2023, Completed: true
ID: 131028 + 1759037530674, Title: Task 3, Due: Sun Oct 15 2023, Completed: false
```

# Task 5 : Promises & Async Operations

- In Task 5.1 I am doing a setTaskToStroage function which is return a _PROMISE_ by using .then and .catch block. It also contain a setTimeout function which takes time to genarate the output within birthMonth\*100ms time.

```
Tasks saved to storage successfully.
```
