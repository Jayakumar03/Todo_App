export const TodoListRender = (props) => {
    return(
        <>
        <ul>
            {
                props. todosList.map((todo) => {
                    return (<li key={todo.id}>{todo.task}</li>)
                })
            }
        </ul>
        
        </>
    )
}