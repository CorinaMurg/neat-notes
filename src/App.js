
import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"
import './App.css';


export default function App() {
    const [notes, setNotes] = React.useState(
        () => JSON.parse(localStorage.getItem("notes")) || []
    );

    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    );

    const [noteCount, setNoteCount] = React.useState(
        () => JSON.parse(localStorage.getItem("noteCount")) || 0
    );

    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]
    
    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
        localStorage.setItem("noteCount", JSON.stringify(noteCount));
        if (notes.length === 0) {
            setNoteCount(0);
        }
    }, [notes, noteCount]);
    
    function createNewNote() {
        const dateCreated = new Date();
        const newNote = {
            id: nanoid(),
            body: `# Note ${String.fromCharCode(65 + noteCount % 26)}\n\nCreated: ${dateCreated.toLocaleString()}`
        }

        setNotes(prevNotes => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
        setNoteCount(prevCount => prevCount + 1);
    }
    
    function updateNote(text) {
        // Put the most recently-modified note at the top
        setNotes(oldNotes => {
            const newArray = []
            for(let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if(oldNote.id === currentNoteId) {
                    newArray.unshift({ ...oldNote, body: text })
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        })
    }
    
    function deleteNote(event, deletedNoteId) {
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter(note => note.id !== deletedNoteId))
    }
    
    
    return (
        <main>
        {
            notes.length > 0 
            ?
            <Split 
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar
                    notes={notes}
                    currentNoteId={currentNoteId}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                    deleteNote={deleteNote}
                />
                {
                    currentNoteId && 
                    notes.length > 0 &&
                    <Editor 
                        current={currentNote} 
                        updated={updateNote} 
                    />
                }
            </Split>
            :
            <div className="no-notes">
                <h1>You have no notes</h1>
                <button 
                    className="first-note" 
                    onClick={createNewNote}
                >
                    Create one now
                </button>
            </div>
            
        }
        </main>
    )
}


