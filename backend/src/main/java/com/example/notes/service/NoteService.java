package com.example.notes.service;

import com.example.notes.entity.Note;
import com.example.notes.repository.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {

    private final NoteRepository repository;

    public NoteService(NoteRepository repository) {
        this.repository = repository;
    }

    public List<Note> getAllNotes() {
        return repository.findAll();
    }

    public Note getNoteById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Note saveNote(Note note) {
        return repository.save(note);
    }

    public Note updateNote(Long id, Note note) {

        Note existing = repository.findById(id).orElse(null);

        if (existing != null) {
            existing.setTitle(note.getTitle());
            existing.setDescription(note.getDescription());
            return repository.save(existing);
        }

        return null;
    }

    public void deleteNote(Long id) {
        repository.deleteById(id);
    }

}