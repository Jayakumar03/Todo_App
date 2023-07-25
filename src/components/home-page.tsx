import { useState } from "react";
import { v4 as uuid } from 'uuid';
import {AllButton}  from "./allbutton";
import { CompletedButton } from "./completed-button"
import { ActiveButton } from "./active-button";
import { TodoListRender } from "./todolist-render";
import "../css/homepage.css"

const HomePage = () => {

function submitHandler(event:Event):void {
    event.preventDefault()
    
    setTodo("")
    setTodos([...todos, {
        "id" : uuid(),
        "task":todo,
        "completed":false
}])

    console.log(todos)
}



    const [todos, setTodos] = useState([])
    const [todo, setTodo]  =  useState<string>("")

    return(
        <div id="homepage">
    
       <section className="aside-section">
       <AllButton />
       <ActiveButton />
       <CompletedButton/>
       </section>


       <section className="todo-section">

        <div className="title">
            <h1 >Task Master</h1>
        </div>

        <div className="form-section">
            <form 
            onChange={ (event:Event) =>event.preventDefault}
            onSubmit={submitHandler}
            >
                <input 
                type="text" 
                name="todo" 
                required 
                placeholder="Enter your todo" 
                value={todo} 
                onChange={(event:Event) => {
                setTodo(event?.target.value)
                }} />
               <button className="send-button" onSubmit={submitHandler}><i className="fa-solid fa-paper-plane fa-xl"></i></button>
            </form>

    

        </div>
       </section>
       <TodoListRender todosList={todos} />
        </div>


      
    )

}



export default HomePage