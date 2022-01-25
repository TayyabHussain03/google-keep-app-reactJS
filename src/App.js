import React, { useState } from 'react';
import Header from '../src/components/Header'
import Notes from '../src/components/Notes'
import AddNotes from '../src/components/AddNotes'

function App() {
    const [data, setData] = useState([])
    function addEvent(note) {
        setData((oldData) => {
            return [
                ...oldData,
                note]
        })
    }
    function dltData(id) {
        setData((oldData) => oldData.filter((val, index) => {
            return (
                index != id
            )
        }))
    }
    return (
        <>
            <Header />
            <Notes passNote={addEvent} />
            {data.map((val, index) => {
                return (
                    <AddNotes
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        dlt={dltData}
                    />
                )
            })}
            
        </>
    );
}

export default App;
