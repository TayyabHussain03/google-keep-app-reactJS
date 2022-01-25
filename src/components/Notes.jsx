import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import './index.css';

function Notes(props) {
    const [expand, setExpand] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: "",
    })
    function InputEvent(event) {
        const name = event.target.name
        const value = event.target.value
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })

    }
    function MyNotes() {
        props.passNote(note)
        setNote({
            title: "",
            content: "",
        })
    }

    function expandClk() {
        setExpand(true)
    }
    function againExpand() {
        setExpand(false)
    }
    return (
        <div className="notes">
            <div className="notesArea">
                {expand ?
                    <input type="text" value={note.title} name="title" onChange={InputEvent} placeholder="Title" /> : null}
                <br />
                <textarea onClick={expandClk} onDoubleClick={againExpand} value={note.content} name="content" onChange={InputEvent} placeholder="Write a Note...." rows="5" />
            </div>
            <button onClick={MyNotes} className="button"><IoMdAdd /></button>
        </div>
    );
}

export default Notes;