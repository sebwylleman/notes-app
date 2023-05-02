const NotesModel = require('./models/notesModel');

const myNotes = new NotesModel();
myNotes.addNote('Clean bedroom');
myNotes.addNote('Write food shopping list');
console.log(myNotes.getNotes());
