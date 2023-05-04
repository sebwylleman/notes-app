/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('../models/notesModel');
const path = require('path');

describe('Notes View', () => {
  let model;
  let view;

  beforeEach(() => {
    const relativePath = path.join(__dirname, '..', '..', 'index.html');
    document.body.innerHTML = fs.readFileSync(relativePath);
    model = new NotesModel();
    view = new NotesView(model);
  });

  it('Displays two notes', () => {
    model.addNote('Go to the gym');
    model.addNote('Prepare lunch');

    view.displayNotes();
    const notes = document.querySelectorAll('div.note');
    expect(notes.length).toEqual(2);
    expect(notes[0].innerText).toEqual('Go to the gym');
    expect(notes[1].innerText).toEqual('Prepare lunch');
  });

  it('adds a new note', () => {
    const input = document.querySelector('#add-note-input');
    input.value = 'This is a new test note';

    const addNoteBtn = document.querySelector('#add-note-btn');
    addNoteBtn.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual(
      'This is a new test note'
    );
  });

  xit('clears previous notes', () => {
    // fill in
  });
});
