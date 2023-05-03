/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('../models/notesModel');
const path = require('path');

describe('Notes View', () => {
  it('Displays two notes', () => {
    const relativePath = path.join(__dirname, '..', '..', 'index.html');
    document.body.innerHTML = fs.readFileSync(relativePath);
    notesView = new NotesView();

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('Go to the gym');
    model.addNote('Prepare lunch');

    view.displayNotes();
    const notes = document.querySelectorAll('div.note');
    expect(notes.length).toBe(2);
    expect(notes[0].innerText).toBe('Go to the gym');
    expect(notes[1].innerText).toBe('Prepare lunch');
  });
});
