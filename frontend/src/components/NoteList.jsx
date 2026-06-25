function NoteList({ notes, onDelete }) {

    return (

        <div>

            <h3>All Notes</h3>

            {notes.length === 0 ? (

                <p>No Notes Found</p>

            ) : (

                notes.map((note) => (

                    <div
                        className="card mb-3 p-3"
                        key={note.id}
                    >

                        <h5>{note.title}</h5>

                        <p>{note.description}</p>

                        <button
                            className="btn btn-danger"
                            onClick={() => onDelete(note.id)}
                        >
                            Delete
                        </button>

                    </div>

                ))

            )}

        </div>

    );

}

export default NoteList;