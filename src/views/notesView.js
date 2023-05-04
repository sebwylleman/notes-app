const NotesModel = require('../models/notesModel');

class NotesView {
  constructor(notesModel) {
    this.notesModel = notesModel;
    this.mainContainer = document.querySelector('#main-container');
    this.addNoteBtn = document.querySelector('#add-note-btn');

    this.addNoteBtn.addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
      this.clearInput();
    });
  }

  displayNotes() {
    // clearing the old notes
    const notesToDel = document.querySelectorAll('div.note');
    notesToDel.forEach((note) => {
      note.remove();
    });

    // displaying only newly added notes
    const notes = this.notesModel.getNotes();

    notes.forEach((note) => {
      const noteElement = document.createElement('div');
      noteElement.innerText = note;
      noteElement.className = 'note';
      this.mainContainer.append(noteElement);
    });
  }

  addNewNote(note) {
    this.notesModel.addNote(note);
    this.displayNotes();
  }

  clearInput() {
    const noteInput = document.querySelector('#add-note-input');
    noteInput.value = '';
  }
}

module.exports = NotesView;
