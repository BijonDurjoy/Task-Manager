//Task 1: information - Data types and variables
const studentInformation = {
  id: 131028,
  name: "Bijon Saha",
  birthMonth: 4,
  favoriteColor: "Black",
};

//console.log(studentInformation);

//Task 2: Task object constructor

class Task {
  constructor(title, description, dueDate, category, priority = 3) {
    this.id = `${studentInformation.id} + ${Date.now()}`;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = false;
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
  1
);
//console.log(demo1);

//Task 3 : Functions
let tasks = [];
function createTask(title, description, dueDate, category) {
  let newTask = new Task(title, description, dueDate, category);
  tasks.push(newTask);
  return newTask;
}
const a = createTask("Task 1", "Description 1", "2023-12-31", "Work");
const b = createTask("Task 2", "Description 2", "2023-11-30", "Personal");
//console.log("Created Tasks:", tasks);

// Delete task by id
function deleteTask(id){
    tasks = tasks.filter(task => task.id !== id);
    return tasks;
}
//console.log("After Deletion:", deleteTask(t1.id));

// display all tasks optionally filter by category
function displayTasks(category){
  console.log(`Displaying tasks by category: ${category}`);
  const filteredTasks = tasks.filter(task => task.category === category);

  if(filteredTasks.length === 0){
    console.log("No tasks found in this category.");
  } else {
    filteredTasks.forEach(task => {
      console.log(`ID: ${task.id}, Title: ${task.title}, Due: ${task.dueDate.toDateString()}, Completed: ${task.completed}`);
    });
  }
}
//displayTasks("Work");

// Arrow function to calclulate percentage of completed tasks
let calculatePercentage = () =>{
  if(tasks.length === 0 ){
    return "No Tasks Available";
  }
  const completedTasks = tasks.filter(task => task.completed).length;
  const percentage = (completedTasks / tasks.length) * 100;
  return `Completed Tasks: ${percentage.toFixed(2)}%`;
}

const c =  createTask("Task 3", "Description 3", "2023-10-15", "Work");
a.completed = true;
b.completed = true;
console.log(calculatePercentage());

//Task 4 : Loops
let displayTasksByMonth = () =>{
  console.log(`Tasks due in birthday month: `);

  for(let i = 0; i<tasks.length; i++){
    let task = tasks[i];
    if(task.createdDate.getMonth() +1 === studentInformation.birthMonth){
      console.log(`ID: ${task.id}, Title: ${task.title}, Due: ${task.dueDate.toDateString()}, Completed: ${task.completed}`);
    }
  }
};

a.createdDate = new Date("2023-04-10");
b.createdDate = new Date("2023-09-15"); 
c.createdDate = new Date("2023-04-20"); 
//displayTasksByMonth();

//Task 5.1: Promise and Async operation 

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