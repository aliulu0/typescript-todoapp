export interface ITodo{
    id: string;
    title: string;
    isCompleted: boolean;
}

export type TodoContextType = {
    todoList: ITodo[];
    filteredList: ITodo[];
    addTodo: (todo: ITodo) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id:string, editValue:string) => void;
    completeTodo: (id: string ) => void;
    filteredTodoList: (selected:string ) => void;
    clearTodoList: () => void;
}