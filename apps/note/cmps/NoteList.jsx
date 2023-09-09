import {noteService } from "../services/note.service.js"
console.log(noteService.notes)
export function NoteList() {
    return (
        <section>
            <h2>info txt: {noteService.notes[0].info.txt}</h2>
        </section>
    )
}

