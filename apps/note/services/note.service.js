// note service
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

const notes = [
  {
    id: 'n101',
    createdAt: '10.5.2023',
    type: 'NoteTxt',
    isPinned: true,
    style: {
      backgroundColor: '#00d'
    },
    info: {
      txt: 'Fullstack Me Baby!'
    }
  },
  {
    id: 'n102',
    createdAt: '1.4.2023',
    type: 'NoteImg',
    isPinned: false,
    info: {
      url: 'http://some-img/me',
      title: 'I am not a lier'
    },
    style: {
      backgroundColor: '#00d'
    }
  },
  {
    id: 'n103',
    createdAt: '7.3.2023',
    type: 'NoteTodos',
    isPinned: false,
    info: {
      title: 'Get my stuff together',
      todos: [
        { txt: 'Driving license', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 }
      ]
    }
  }
]

export const  noteService = {
  // getNoteById,
  notes
}

// function getNoteById(notes, id) {
//   return notes.find((note) => note.id === id)
// }

