import {v4 as uuidv4} from 'uuid';

const tsk = [
  { id: uuidv4(), title: 'Tarea de ejemplo 1', description: 'Descripción pendiente1',status: false },          
  { id: uuidv4(), title: 'Tarea de ejemplo 2', description: 'Descripción pendiente2',status: true },          
  { id: uuidv4(), title: 'Tarea de ejemplo 3', description: 'Descripción pendiente3',status: true }
]

export const TaskProvider = () => {
    return (<></>)
}