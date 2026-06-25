import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getNotes = () => axios.get(API_URL);

export const addNote = (note) => axios.post(API_URL, note);

export const updateNote = (id, note) => axios.put(`${API_URL}/${id}`, note);

export const deleteNote = (id) => axios.delete(`${API_URL}/${id}`);