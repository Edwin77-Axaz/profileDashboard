const express = require('express');
const cors = require('cors'); // Agregamos CORS
const app = express();
const port = 3000;

// Datos de ejemplo
let tasks = [
    [
        {
          "id": "1",
          "descrption": "Finish report",
          "time": "2 hours",
          "person": "John",
          "name_task": "Task 1",
          "category": "category task 1",
          "details": "details the task 1"
        },
        {
          "id": "1",
          "descrption": "Finish report",
          "time": "2 hours",
          "person": "John",
          "name_task": "Task 1",
          "category": "category task 1",
          "details": "details the task 1"
        },
        {
          "id": "1",
          "descrption": "Finish report",
          "time": "2 hours",
          "person": "John",
          "name_task": "Task 1",
          "category": "category task 1",
          "details": "details the task 1"
        },
        {
          "id": "1",
          "descrption": "Finish report",
          "time": "2 hours",
          "person": "John",
          "name_task": "Task 1",
          "category": "category task 1",
          "details": "details the task 1"
        },
        {
          "id": "1",
          "descrption": "Finish report",
          "time": "2 hours",
          "person": "John",
          "name_task": "Task 1",
          "category": "category task 1",
          "details": "details the task 1"
        },
        {
          "id": "1",
          "descrption": "Finish report",
          "time": "2 hours",
          "person": "John",
          "name_task": "Task 1",
          "category": "category task 1",
          "details": "details the task 1"
        },
        {
          "id": "1",
          "descrption": "Finish report",
          "time": "2 hours",
          "person": "John",
          "name_task": "Task 1",
          "category": "category task 1",
          "details": "details the task 1"
        },
        {
          "id": "1",
          "descrption": "Finish report",
          "time": "2 hours",
          "person": "John",
          "name_task": "Task 1",
          "category": "category task 1",
          "details": "details the task 1"
        },
        {
          "id": "1",
          "descrption": "Finish report",
          "time": "2 hours",
          "person": "John",
          "name_task": "Task 1",
          "category": "category task 1",
          "details": "details the task 1"
        },
    
    ]
];

app.use(express.json());
app.use(cors()); // Agregamos CORS para permitir solicitudes desde cualquier origen

// Ruta para obtener todas las tareas
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Ruta para obtener una tarea por su ID
app.get('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

// Ruta para agregar una nueva tarea
app.post('/api/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Ruta para eliminar una tarea por su ID
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask[0]);
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

app.listen(port, () => {
  console.log(`El servidor está Corriendo en el puerto ${port}`);
});
