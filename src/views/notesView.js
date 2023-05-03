const NotesModel = require('../models/notesModel');

class NotesView {
  constructor(notesModel) {
    this.notesModel = notesModel;
    this.mainContainer = document.querySelector('#main-container');
  }
  displayNotes() {
    const notes = this.notesModel.getNotes();

    notes.forEach((note) => {
      const noteElement = document.createElement('div');
      noteElement.innerText = note;
      noteElement.className = 'note';
      this.mainContainer.append(noteElement);
    });
  }
}

module.exports = NotesView;
