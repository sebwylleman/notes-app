const NotesModel = require('./notesModel');

describe('Notes', () => {
  let myNotes;

  beforeEach(() => {
    myNotes = new NotesModel();
  });

  it('returns an empty array', () => {
    expect(myNotes.getNotes()).toEqual([]);
  });
  it('adds notes to the notes array', () => {
    myNotes.addNote('Buy Milk');
    myNotes.addNote('Go to the gym');
    expect(myNotes.getNotes()).toEqual(['Buy Milk', 'Go to the gym']);
  });
  it('resets the notes array to its initial state of being empty', () => {
    myNotes.addNote('Buy Milk');
    myNotes.reset();
    expect(myNotes.getNotes()).toEqual([]);
  });
});
