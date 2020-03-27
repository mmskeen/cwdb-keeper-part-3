import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes([...notes, newNote]);
  }
  function deleteNote(id) {
    setNotes(notes.filter((n, index) => id !== index));
  }
  const noteItems = notes.map((n, index) => (
    <Note
      key={index}
      title={n.title}
      content={n.content}
      onDelete={() => deleteNote(index)}
    />
  ));
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteItems}
      <Footer />
    </div>
  );
}

export default App;
