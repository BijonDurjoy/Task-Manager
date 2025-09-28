# Task-Manager
The outputs of all tasks of Task Manager assignment. 

## Task 1 Output: 
Data Types and Variables

```
{
  id: 131028,
  name: 'Bijon Saha',
  birthMonth: 4,
  favoriteColor: 'Black'
}
```

## Task 2 Output:
Task object Constructor 
```
Task {
  id: '131028 + 1758903320770',
  description: 'This is an assignment',
  priority: 1,
  completed: true,
  createdDate: 2025-09-26T16:15:20.770Z,
  dueDate: 2023-12-31T00:00:00.000Z,
  category: 'School'
}
```
## Task 3 : Functions
- Output of createTask function:
This function is used to create new tasks for a user. 
```Created Tasks: [
  Task {
    id: '131028 + 1758948049351',
    description: 'Description 1',
    priority: 3,
    completed: true,
    createdDate: 2025-09-27T04:40:49.351Z,
    dueDate: 2023-12-31T00:00:00.000Z,
    category: 'Work'
  },
  Task {
    id: '131028 + 1758948049351',
    description: 'Description 2',
    priority: 3,
    completed: true,
    createdDate: 2025-09-27T04:40:49.351Z,
    dueDate: 2023-11-30T00:00:00.000Z,
    category: 'Personal'
  }
]
```
- Output of deleteTask function: 
This function is work for delete all tasks by using its id. To run this function, it will delete all existing tasks of a id.
```
After Deletion: []
```

- Display Tasks by category: 
This function mainly shows all the tasks of same category.
```
Displaying tasks by category: Work
ID: 131028 + 1758950272537, Title: Task 1, Due: Sun Dec 31 2023, Completed: false
```
## Arrow Function: calculate the percentage
This arrow func calculatae the percentage of completed task. In this code there are three created task task a, b and c. in the arrow function, I declare task a and c as complete. so the output is,
```
Completed Tasks: 66.67%
```