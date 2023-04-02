import React, {useState} from "react";

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    })

    const createNote = (event) => {
        const {name, value} = event.target;
        setNewNote(prevState => { return {
            ...prevState, [name] : value
        }
        })
    }

    return (
    <div>
      <form>
        <input onChange={createNote} name="title" placeholder="Title" value={newNote.title}/>
        <textarea onChange={createNote} name="content" placeholder="Take a note..." rows="3"  value={newNote.content}/>
        <button onClick={(event) => {
            props.note(newNote);
            event.preventDefault();
            setNewNote({title: "", content: ""});
        }}>Add</button>
      </form>
    </div>
    );
    }

export default CreateArea;
