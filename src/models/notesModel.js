class NotesModel {
  constructor() {
    this.notes = []; // initialises notes to be empty
  }
  getNotes() {
    return this.notes;
  }
  addNote(note) {
    this.notes.push(note);
  }
  reset(note) {
    this.notes = [];
  }
}

module.exports = NotesModel;
