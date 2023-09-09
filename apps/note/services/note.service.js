import { storageService } from '../../../services/async-storage.service.js'
import { storageService as storage } from '../../../services/storage.service.js'

const NOTES_KEY = 'notesDB'

let notes = [{
    id: 'n101',
    createdAt: '20.8.23',
    type: 'NoteTxt', isPinned: true,
    info: {
        txt: 'I forget to put a title'
    }
},
{
    id: 'n102',
    createdAt: '8.7.23',
    type: 'NoteTxt',
    isPinned: false,
    info: {
        title: 'cool msg',
        txt: "Hey What's up?"
    },
},
{
    id: 'n103',
    type: 'NoteTodos',
    isPinned: false,
    info:
    {
        title: 'tasks',
        todos: [
            { txt: 'Clean my room', doneAt: null },
        ]
    }
},
    {
        id: 'n104',
        createdAt: '2.7.23',
        type: 'NoteTxt',
        isPinned: false,
        info: {
            title: 'My favorite Food',
            txt: "Hamburger 🍔"
        },
    }
]


_createNotes()


export const noteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
}



function query() {
    return storageService.query(NOTES_KEY).then(notes => {
        return notes
    })
}

function get(noteId) {
    return storageService.get(NOTES_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTES_KEY, note)
    } else {
        return storageService.post(NOTES_KEY, note)
    }
}

function getEmptyNote() {
    return {
        id: '',
        createdAt: 0,
        type: 'NoteTxt',
        isPinned: false,
        info: {
            title: '',
            txt: ''
        }
    }
}

function _getAllNotes() {
    return notes
}

function _createNotes() {
    let notes = storage.loadFromStorage(NOTES_KEY)
    if (!notes || !notes.length) {
        notes = _getAllNotes()
        storage.saveToStorage(NOTES_KEY, notes)
    }
}
