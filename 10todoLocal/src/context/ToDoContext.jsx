import { createContext,useContext } from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Complete React",
            completed: false,
        }
    ],
    addTodo:(todo) => {},
    updatedTodo: (id,todo) =>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id) =>{},
});

export const useToDo =() =>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ({ children, value }) => {
  return (
    <ToDoContext.Provider value={value}>
      {children}
    </ToDoContext.Provider>
  );
};

