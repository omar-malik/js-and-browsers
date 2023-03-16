/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('notesView', () => {
  it('displays 2 notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel;
    const notesView = new NotesView(notesModel);

    notesModel.addNote('a first note');
    notesModel.addNote('another note');

    notesView.displayNotes();

    expect(document.querySelectorAll('p.note').length).toBe(2)
  })
})