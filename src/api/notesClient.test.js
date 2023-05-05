const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('NotesClient class', () => {
  it('calls fetch and loads data', (done) => {
    const client = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify([{ text: 'Note 1', id: 1 }]));

    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi[0].text).toBe('Note 1');
      expect(returnedDataFromApi[0].id).toBe(1);
      done();
    });
  });
});
