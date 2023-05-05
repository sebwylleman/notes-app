class NotesClient {
  constructor() {
    this.apiUrl = 'http://localhost:3000/notes';
  }
  loadNotes(callback) {
    fetch(this.apiUrl)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((error) => console.error(error));
  }
}
module.exports = NotesClient;
