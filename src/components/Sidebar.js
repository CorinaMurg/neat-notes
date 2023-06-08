

import React from "react"

export default function Sidebar(props) {
    const noteElements = props.notes.map((note) => (
        <div key={note.id}>
            <div
                
                className={`title ${
                    note.id === props.currentNoteId ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">{note.body.split("\n")[0].replace(/^\W+/,'')}</h4>
                <button 
                    className="delete-btn"
                    onClick={(event) => props.deleteNote(event, note.id)}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
            </div>
        </div>
    ))

    return (
        <section className={`pane sidebar ${props.darkMode ? "dark": ""}`}>
            <div className="toggler" >
                <p className="toggler--light">Light</p>
                
                <div className="toggler--circle" onClick={props.toggleDarkMode}></div>
                
                <p className="toggler--dark">Dark</p>
            </div>
            <div className="sidebar--header">
                <h3>Quick Notes</h3>
                <button className={`new-note ${!props.darkMode ? "light": ""}`} onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}