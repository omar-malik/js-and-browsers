const NotesModel = require('./notesModel');

class NotesView {
  constructor(notesModel) {
    this.notesModel = notesModel
    this.noteInput = document.querySelector('#note-input');
    this.addNoteButton = document.querySelector('#add-note-button');

    this.addNoteButton.addEventListener('click', () => {
      this.notesModel.addNote(this.noteInput.value);
      this.displayNotes();
    })
  }

  displayNotes() {
    const list = (document.querySelectorAll('.note'))
    list.forEach(note => {
      note.remove()
    });
    this.noteInput.value = ''
    const notes = this.notesModel.getNotes();

    notes.forEach(note => {
      const noteElement = document.createElement('div');
      noteElement.textContent = note;
      noteElement.className = 'note';
      document.querySelector('#main-container').append(noteElement);
    })
    
  }
}

module.exports = NotesView;