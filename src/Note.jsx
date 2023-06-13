import React from 'react'

export default function Note({ id, note, handleDelete }) {
    return (
        <div key={id} className='note'>
            <p>{note}</p>
            <span class="material-symbols-outlined" onClick={() => handleDelete(id)}>
                delete
            </span>
        </div>
    )
}
