import { useEffect, useState } from "react";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

import {
    getNotes,
    addNote,
    deleteNote
} from "./services/noteService";

function App() {

    const [notes, setNotes] = useState([]);

    const loadNotes = () => {

        getNotes().then((response) => {

            setNotes(response.data);

        });

    };

    useEffect(() => {

        loadNotes();

    }, []);

    const handleAdd = (note) => {

        addNote(note).then(() => {

            loadNotes();

        });

    };

    const handleDelete = (id) => {

        deleteNote(id).then(() => {

            loadNotes();

        });

    };

    return (

        <div className="container mt-5">

            <h1 className="text-center mb-4">

               "Notes Management System➡️⬅️ "

            </h1>

            <NoteForm onSave={handleAdd} />

            <NoteList
                notes={notes}
                onDelete={handleDelete}
            />

        </div>

    );

}

export default App;