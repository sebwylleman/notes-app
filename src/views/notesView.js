const NotesModel = require('../models/notesModel');
const NotesClient = require('../api/notesClient');

class NotesView {
  constructor(notesModel, notesClient) {
    this.notesModel = notesModel;
    this.notesClient = notesClient;
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

      // Check if the note is an object with 'text' property
      if (note.text) {
        noteElement.innerText = note.text;
      } else {
        noteElement.innerText = note;
      }

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

  displayNotesFromApi() {
    this.notesClient.loadNotes((data) => {
      this.notesModel.setNotes(data);
      this.displayNotes();
    });
  }
}

module.exports = NotesView;
