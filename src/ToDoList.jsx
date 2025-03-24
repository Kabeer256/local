import { useState, useEffect } from "react";
function ToDoList(){
    const [todos, setTodos] = useState([]);
    // const [newTodo, setNewTodo] = useState("");

    function toDOadd(){
        const newTodo = document.getElementById("data").value;
        setTodos([...todos, newTodo]);
        document.getElementById("data").value="";
    }

    function toDodelete(){
        setTodos(todos.filter((items)=>items!==document.getElementById("data").value));
    }
   
    const list = todos.map((items)=>{
        return <li key={items}>{items}</li>;
    })


    return(
        <div>
            <label>Todo:</label>
            <input id="data" type="text" placeholder="Add todo" />
            <button onClick={toDOadd}>Add</button>
            <button onClick={toDodelete}>Delete</button>
            <ul>{list}</ul>
            
        </div>
    );
}

export default ToDoList;
