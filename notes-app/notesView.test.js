/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe('notesView', () => {
  it('displays a note input from the web page', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel;
    const notesView = new NotesView(notesModel);

    const buttonEl = document.querySelector('#add-note-button')
    const inputEl = document.querySelector('#note-input')
    inputEl.value = 'a test note'
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toBe(1)
    expect(document.querySelector('div.note').textContent).toBe('a test note')
  })

  it('verifies the correct number of notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel;
    const notesView = new NotesView(notesModel);

    notesModel.addNote('a note');
    notesModel.addNote('a note');
    notesView.displayNotes();
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  })
})