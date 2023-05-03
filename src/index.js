const NotesModel = require('./models/notesModel');
const NotesView = require('./views/notesView');
const NotesModel = require('./models/notesModel');

const model = new NotesModel();
model.addNote('This is an example note');

const view = new NotesView(model);
view.displayNotes();
