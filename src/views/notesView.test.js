/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesView = require('./notesView');
const path = require('path');

describe('Notes View', () => {
  let notesView;

  beforeEach(() => {
    const relativePath = path.join(__dirname, '..', '..', 'index.html');
    document.body.innerHTML = fs.readFileSync(relativePath);
    notesView = new NotesView();
  });

  it('Displays one note', () => {
    notesView.displayNotes(['This is a test Note']);
    const notes = document.querySelectorAll('div.note');
    expect(notes.length).toBe(1);
    expect(notes[0].innerText).toBe('This is a test Note');
  });
});
