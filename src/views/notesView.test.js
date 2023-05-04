/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('../models/notesModel');
const path = require('path');

describe('Notes View', () => {
  beforeEach(() => {
    const relativePath = path.join(__dirname, '..', '..', 'index.html');
    document.body.innerHTML = fs.readFileSync(relativePath);
  });

  it('Displays two notes', () => {
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('Go to the gym');
    model.addNote('Prepare lunch');

    view.displayNotes();
    const notes = document.querySelectorAll('div.note');
    expect(notes.length).toEqual(2);
    expect(notes[0].innerText).toEqual('Go to the gym');
    expect(notes[1].innerText).toEqual('Prepare lunch');
  });
  it('adds a new note', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector('#add-note-input');
    input.value = 'This is a new test note';

    input.click();
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual(
      'This is a new test note'
    );
  });
});
