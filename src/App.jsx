import React, { useState } from 'react'
import './App.css';
import Body from './Body';
import Header from './Header';

function App() {
  const [notes, setNotes] = useState(() => {
    const getLocal = JSON.parse(localStorage.getItem("note")) ?? []
    console.log("🚀 ~ file: App.jsx:9 ~ const[notes,setNotes]=useState ~ getLocal:", getLocal)
    return getLocal;
  })
  const handleChange = (note) => {
    const newNote = [...notes, note]
    setNotes(newNote)
    localStorage.setItem("note", JSON.stringify(newNote))

  }
  const handleDelete = (id) => {
    const newNote = notes.filter(note => note.id !== id)
    setNotes(newNote);
    localStorage.setItem("note", JSON.stringify(newNote))
  }
  console.log("🚀 ~ file: App.jsx:18 ~ handleChange ~ handleChange:", handleChange)
  return (
    <div className="App">
      <Header></Header>
      <Body handleChange={handleChange} notes={notes} handleDelete={handleDelete}></Body>
    </div>
  );
}

export default App;
