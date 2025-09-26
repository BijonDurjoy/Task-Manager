//Task 1: information - Data types and variables
const studentInformation = {
    id: 131028,
    name: "Bijon Saha",
    birthMonth: 4,
    favoriteColor: "Black"
}

console.log(studentInformation);

//Task 2: Task object constructor

class Task{
    constructor(title, description, dueDate,category,priority = 3){
        this.id = `${studentInformation.id} + ${Date.now()}`;
        this,title = title;
        this.description = description;
        this.priority = priority;
        this.completed = true;
        this.createdDate = new Date();
        this.dueDate = new Date(dueDate);
        this.category = category;

    }
}

const demo1 = new Task("Bijon's Task Manager", "This is an assignment", "2023-12-31", "School", 1);
console.log(demo1);