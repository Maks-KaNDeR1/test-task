import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})


export const todosAPI = {
    getTodos() {
        return instance.get<TodosType[]>('todos');
    },
}

export type TodosType =  {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
    