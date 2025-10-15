//Task 1: information - Data types and variables
const studentInformation = {
  id: "NA-7B3469",
  name: "Bijon Saha",
  birthMonth: 4,
  favoriteColor: "Black",
};

console.log(studentInformation);

//Task 2: Task object constructor

class Task {
  constructor(title, description, dueDate, category, priority, completed) {
    this.id = `${studentInformation.id}_${Date.now()}`;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = completed;
    this.createdDate = new Date();
    this.dueDate = new Date(dueDate);
    this.category = category;
  }
}

const t1 = new Task(
  "Bijon's Task Manager",
  "This is an assignment",
  "2023-12-31",
  "School",
  1,
  true
);
console.log(t1);

//Task 3: Function
//3.1 Add function
let tasks = [];
tasks.push(t1);
function addTask(title, description, dueDate, category, priority, completed) {
  const taskObj = new Task(
    title,
    description,
    dueDate,
    category,
    priority,
    completed
  );
  return taskObj;
}
const t2 = addTask(
  "Task 2",
  "This is task 2",
  "2023-11-30",
  "School",
  3,
  false
);
const t3 = addTask(
  "Task 3",
  "This is task 3",
  "2023-10-31",
  "Personal",
  4,
  true
);
tasks.push(t2);
tasks.push(t3);

console.log("All tasks: ", tasks);

//3.2 Delete task by using task id, if completed is true
function deleteTask(id) {
  tasks = tasks.filter((task) => !(task.id === id && task.completed === true));
  return tasks;
}
deleteTask(tasks[1].id);
console.log("After deleting: ", tasks);

//3.3 displayTasks (filter by category )
function displayTasks(tasks, category) {
  return tasks.filter((task) => task.category === category);
}
const schoolTasks = displayTasks(tasks, "School");
console.log("School tasks: ", schoolTasks);

// 3.4 Arrow function = Calculate parcentage
let calculatePercentage = (tasks) => {
  const totalTasks = tasks.length;
  if (totalTasks === 0) {
    return "No tasks available";
  }
  const completedTasks = tasks.filter((task) => task.completed).length;
  const percentage = (completedTasks / totalTasks) * 100;
  return percentage;
};
const percentageCompleted = calculatePercentage(tasks);
console.log(
  "Percentage of completed tasks: ",
  percentageCompleted.toFixed(2) + "%"
);

/// Task 4 : Display tasks created in your birth month (month NUMBER)
function tasksInBirthMonth(tasks, birthMonth) {
  return tasks.filter((task) => task.createdDate.getMonth() + 1 === birthMonth);
}
tasks[0].createdDate = new Date("2023-04-15"); // Manually setting createdDate for testing
const birthMonthTasks = tasksInBirthMonth(tasks, studentInformation.birthMonth);
console.log("Tasks created in birth month: ", birthMonthTasks);

//Task 5 : Promises & Async Operations
let saveTasksToStorage =(tasks) =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Tasks saved to storage successfully.");
    },studentInformation.birthMonth*100);
  });
}

saveTasksToStorage(tasks)
.then((message)=>{
  console.log(message);
})
.catch((error)=>{
  console.error("Error saving tasks:", error);
});
