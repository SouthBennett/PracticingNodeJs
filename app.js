//
import express from 'express';

//
const app = express();

//
const PORT = 3015;

//
app.set('view engine', 'ejs');

//
app.use(express.static('public'));

// Define a default route
app.get('/', (req, res) => {
  const person = { name: 'Donald Duck', occupation: 'plumber', color:'red' };
  res.render('home', { person });
});

app.get('/friends', (req, res) => {
  const friends = [ 'Mickey', 'Goofy', 'Minnie', 'Daisy' ];
  res.render('friends',{ friends });
});

app.get('/movies', (req, res) => {
  const movies = [ 'Black Panther', 'Tombstone', 'The Quick and The Dead', 'Scary Movie 2' ];
  res.render('movies',{ movies });
  });

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));