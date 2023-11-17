import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RiArrowDropDownFill } from 'react-icons/ri';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/tasks');
                console.log(response.data);
                setTasks(response.data[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const openModal = (task) => {
        setSelectedTask(task);
    };

    const closeModal = () => {
        setSelectedTask(null);
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto overflow-auto max-h-[70vh]">
                <div className="flex flex-wrap -m-4">          {tasks.map((task) => (
                    <div key={task.id} className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative border-2 border-blue-500 shadow-md">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                {task.category}
                            </h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                                {task.name_task}
                            </h1>
                            <p className="leading-relaxed mb-3">{task.descrption}</p>
                            <p className="text-gray-500 text-sm mb-2">Time: {task.time}</p>
                            <p className="text-gray-500 text-sm">Person: {task.person}</p>
                            <button
                                onClick={() => openModal(task)}
                                className="text-indigo-500 inline-flex items-center"
                            >
                                Learn More
                                <svg
                                    className="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                    6
                                </span>
                            </div>

                            {/* Botones desplegables */}
                            <div className="flex justify-center mt-4">
                                <div className="dropdown inline-block relative">
                                    <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                                        Editar
                                        <RiArrowDropDownFill className="ml-2" />
                                    </button>
                                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                                        <li className="rounded">
                                            <a
                                                className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                Opción 1
                                            </a>
                                        </li>
                                        <li className="rounded">
                                            <a
                                                className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                Opción 2
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown inline-block relative ml-2">
                                    <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                                        Eliminar
                                        <RiArrowDropDownFill className="ml-2" />
                                    </button>
                                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                                        <li className="rounded">
                                            <a
                                                className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            >
                                                Confirmar Eliminación
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Fin botones desplegables */}
                        </div>
                    </div>
                ))}

                    {selectedTask && (
                        <div
                            className="modal"
                            style={{ border: '2px solid navy', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        >
                            <div className="modal-content">
                                <span className="close" onClick={closeModal}>
                                    &times;
                                </span>
                                <h2>{selectedTask.name_task}</h2>
                                <p>{selectedTask.descrption}</p>
                                <p>Time: {selectedTask.time}</p>
                                <p>Person: {selectedTask.person}</p>
                                <p>Category: {selectedTask.category}</p>
                                <p>Details: {selectedTask.details}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Tasks;
