import { useState } from "react"

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Either of Title or Description is not filled.");
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }

    }
    return (
        <form className="container" onSubmit={submit}>
            <h4 className="text-center">Add a Task item</h4>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" />
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text" className="form-control" value={desc} onChange={(e) => {setDesc(e.target.value)}} id="desc" />
            </div>
            <button type="submit" className="btn btn-primary">Add Todo</button>
        </form>
    )
}
