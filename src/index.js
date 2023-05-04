const NotesModel = require('./models/notesModel');
const NotesView = require('./views/notesView');

const model = new NotesModel();
const view = new NotesView(model);
