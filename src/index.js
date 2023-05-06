const NotesClient = require('./api/notesClient');
const NotesModel = require('./models/notesModel');
const NotesView = require('./views/notesView');

const model = new NotesModel();
const client = new NotesClient();
const view = new NotesView(model, client);
view.displayNotesFromApi();
