import { NoteService } from "../services/note.service.js"
import { NoteList } from "../cmps/NoteList.jsx"

export function NoteIndex() {
    return (
        <div>
            <div>note app</div>
            <NoteList />
        </div>
    )
}
