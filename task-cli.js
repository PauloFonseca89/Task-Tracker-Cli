
// task-cli.js

// Importando o módulo fs para manipulação de arquivos
const fs = require('fs');


const command = process.argv[2]    
const description = process.argv[3];



// Definindo o caminho do arquivo JSON onde as tarefas serão armazenadas
const filePath = 'tasks.json';

// Verificando se o arquivo JSON existe, se sim, lendo as tarefas existentes, caso contrário, inicializando um array vazio
let tasks = [];
 if (fs.existsSync(filePath)){
    const data = fs.readFileSync(filePath, 'utf-8');
    tasks = JSON.parse(data);
 }else{
    tasks = [];
 }


// Gerando um ID único para a nova tarefa com base no último ID existente
let id = 0;
 if (tasks.length === 0){
   id = 1;
 }else{
    id = tasks[tasks.length - 1].id + 1;
 }


// Verifica o comando fornecido e executando a ação correspondente
if (command === 'add') {
    const task = {
        id: id,
        description: description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }
    tasks.push(task);
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
  console.log("Task added successfully");


// Listando todas as tarefas
}else if (command === 'list') {
    const statusFilter = process.argv[3];
    let filteredTasks = tasks;

    if (statusFilter) {
        filteredTasks = tasks.filter((task) => task.status === statusFilter);
    }
  if (filteredTasks.length === 0) {
    console.log("No tasks found");
  } else {
    filteredTasks.forEach((task) => {
      console.log(`ID: ${task.id}, Description: ${task.description}, Status: ${task.status}`);
    });
  }
}

  //update
else if (command === 'update') {
    const idToUpdate = parseInt(process.argv[3]);
    const newDescription = process.argv[4];

    const taskToUpdate = tasks.find((task) => task.id === idToUpdate)

    
    if ( taskToUpdate ){
        taskToUpdate.description = newDescription;
        taskToUpdate.updatedAt = new Date().toISOString();
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
        console.log("Task updated successfully");
    }else{
        console.log("Task not found");
    }


}


// Delete uma tarefa
else if (command === 'delete') {
    const idToDelete = parseInt(process.argv[3]);
    const indexToDelete = tasks.findIndex((task) => task.id === idToDelete);


    if (indexToDelete === -1){
        console.log("Task not found");
    }else{
        tasks.splice(indexToDelete, 1);
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
        console.log("Task deleted successfully");
    }
}


    // Marca uma tarefa como "in-progress"

    else if (command === 'mark-in-progress') {
    const idToUpdateStatus = parseInt(process.argv[3]);

    const taskToUpdateStatus = tasks.find((task) => task.id === idToUpdateStatus)

    if (taskToUpdateStatus) {
        taskToUpdateStatus.status = 'in-progress';
        taskToUpdateStatus.updatedAt = new Date().toISOString();
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
        console.log("Task status updated successfully");
    } else {
        console.log("Task not found");
    }
}

    // Marca uma tarefa como concluída
else if (command === 'mark-done') {
    const idToUpdateStatus = parseInt(process.argv[3]);

    const taskToUpdateStatus = tasks.find((task) => task.id === idToUpdateStatus)

    if (taskToUpdateStatus) {
        taskToUpdateStatus.status = 'done';
        taskToUpdateStatus.updatedAt = new Date().toISOString();
        fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
        console.log("Task status updated successfully");
    } else {
        console.log("Task not found");
    }
}

else{
  console.log("comando inválido");

}
