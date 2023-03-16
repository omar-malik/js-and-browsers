const NotesModel = require('./notesModel')

describe('NotesModel', () => {
  it('returns empty notes array', () => {
    const notes = new NotesModel;

    expect(notes.getNotes()).toEqual([]);

    notes.addNote('Buy milk');
    notes.addNote('Go to the gym');

    expect(notes.getNotes()).toEqual(['Buy milk', 'Go to the gym']);

    notes.reset();

    expect(notes.getNotes()).toEqual([]);
  })
})