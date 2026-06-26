import { useState } from "react";

function NoteForm({ onSave }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSave({
            title,
            description
        });

        setTitle("");
        setDescription("");
    };

    return (
        <div className="card p-4 mb-4">

            <h3>Add Note</h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <input
                        className="form-control"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <textarea
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                </div>

                <button className="btn btn-primary">
                    Add Note
                </button>

            </form>

        </div>
    );
}

export default NoteForm;