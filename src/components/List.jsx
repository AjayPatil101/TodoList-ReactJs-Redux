import { useMemo } from "react";
import { useSelector } from "react-redux";
import Todoitem from "./Todoitem";

const List = () => {
  // console.log(filteredTodos);

  const filterTodo = useSelector((state) => {
    return state.todos;
  });
  const filter = useSelector((state) => {
    return state.filter;
  });
  const search = useSelector((state) => {
    return state.search;
  });
  const filteredTodos = useMemo(() => {
    return filterTodo.filter((todo) => {
      const matchFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && todo.completed) ||
        filter === "ALL";
      const matchSearch = todo.text.toLowerCase().includes(search);
      return matchFilter && matchSearch;
    });
  }, [filterTodo, search, filter]);
  
  
  return (
    <ul>
      {filteredTodos.map((todo, i) => (
        <Todoitem key={i} todo={todo} index={i} />
      ))}
    </ul>
  );
};

export default List;
