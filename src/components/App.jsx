import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


// get input from user and store state of title and text
// when add is clicked, transfer data to an array of notes and refresh
// map each note to create a new note

function App() {

    const [notes, setNotes] = useState([])

    const addNote = (newNote) => {
        setNotes(prevNotes => {
            return [...prevNotes, {title: newNote.title, content: newNote.content}]
        })
    }

    const deleteNote = (id) => {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return id !== index;
            })
        })

    }
    return (
    <div>
      <Header />
      <CreateArea note={addNote}/>
        {notes.map((note, index) => (<Note key={index} id={index} title={note.title} content={note.content} onChecked={deleteNote}/>))}
      <Footer />
    </div>
    );
}

export default App;
