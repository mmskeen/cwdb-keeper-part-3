import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
    setExpanded(false);
  }

  function expand(e) {
    setExpanded(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={note.content}
          rows={isExpanded ? "3" : "1"}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
