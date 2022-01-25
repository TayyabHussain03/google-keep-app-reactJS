import React from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import './index.css';

function AddNotes(props) {
    function dltNotes(){
        props.dlt(props.id)
    }
    return (
        <div className="container">
            <div className="addNotes">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <button onClick={dltNotes} id={props.id} className="dlt-button">
                    <MdOutlineDeleteOutline />
                </button>
            </div>
        </div>
    );
}

export default AddNotes;