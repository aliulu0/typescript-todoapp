import ListItem from "./ListItem";
import { useTodos } from "../context/TodosContext";
function TodoList() {
    const { filteredList } = useTodos();

    return (
        <div className="list-container">
            {filteredList.map((todo) => (
                <ListItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList