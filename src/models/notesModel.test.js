const NotesModel = require('./notesModel');

describe('Notes', () => {
  let myNotes;

  beforeEach(() => {
    myNotes = new NotesModel();
  });

  it('returns an empty array', () => {
    expect(myNotes.getNotes()).toEqual([]);
  });
});
