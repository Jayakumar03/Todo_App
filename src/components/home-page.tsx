import { useState } from "react";
import "../css/homepage.css"

const HomePage = () => {

    const [count, setCount]  = useState(0)

    return(
        <div id="homepage">
    
       <section className="aside-section">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
       </section>


       <section className="todo-section">

        <div className="title">
            <h1 >Task Master</h1>
        </div>

        <div className="form-section">
            <form>
                <input type="text" name="todo" required></input>
               <button><i className="fa-solid fa-paper-plane fa-xl"></i></button>
            </form>

        </div>
       </section>
        
        
        </div>
    )

}



export default HomePage