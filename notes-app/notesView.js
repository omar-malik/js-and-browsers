const NotesModel = require('./notesModel');

class NotesView {
  constructor(notesModel) {
    this.notesModel = notesModel
  }

  displayNotes() {
    const notes = this.notesModel.getNotes();

    notes.forEach(note => {
      const noteElement = document.createElement('p');
      noteElement.textContent = note;
      noteElement.className = 'note';
      document.querySelector('#main-container').append(noteElement);
    })
    
  }
}

module.exports = NotesView;