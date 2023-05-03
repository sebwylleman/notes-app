const NotesModel = require('./models/notesModel');
const NotesView = require('./views/notesView');

const model = new NotesModel();
model.addNote('Go gym');
model.addNote('Prepare food');
model.addNote('Code the rest of the day');

const view = new NotesView(model);
view.displayNotes();
