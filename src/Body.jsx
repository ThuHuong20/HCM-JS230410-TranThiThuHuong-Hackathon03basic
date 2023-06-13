import React, { useState } from 'react'
import Note from './Note'
export default function Body({ handleChange, notes, handleDelete }) {
    const [note, setNote] = useState("");
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    return (
        <div className='body'>
            <div className='body-container'>
                <textarea value={note} onChange={(e) => { setNote(e.target.value) }} cols="30" rows="6" placeholder='Take a note...'></textarea>
                <button className='buttonClick' onClick={() => { handleChange({ id: uuidv4(), note: note }) }}>+</button>
            </div>
            <div className='listNote'>
                {notes.map((value, index) => (
                    <Note key={index} id={value.id} note={value.note} handleDelete={handleDelete} />
                ))}
            </div>
        </div >
    )
}
