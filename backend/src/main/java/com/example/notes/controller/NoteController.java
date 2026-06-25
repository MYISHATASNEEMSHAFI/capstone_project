package com.example.notes.controller;

import com.example.notes.entity.Note;
import com.example.notes.service.NoteService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "*")
public class NoteController {

    private final NoteService service;

    public NoteController(NoteService service) {
        this.service = service;
    }

    @GetMapping
    public List<Note> getAllNotes() {
        return service.getAllNotes();
    }

    @GetMapping("/{id}")
    public Note getNote(@PathVariable Long id) {
        return service.getNoteById(id);
    }

    @PostMapping
    public Note addNote(@Valid @RequestBody Note note) {
        return service.saveNote(note);
    }

    @PutMapping("/{id}")
    public Note updateNote(@PathVariable Long id,
                           @Valid @RequestBody Note note) {
        return service.updateNote(id, note);
    }

    @DeleteMapping("/{id}")
    public String deleteNote(@PathVariable Long id) {

        service.deleteNote(id);

        return "Note deleted successfully";

    }

}