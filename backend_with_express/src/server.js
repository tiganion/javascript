import express from 'express';
import bodyParser from 'body-parser';
import people from './people';

const app = express();

// this is a plugin to get the body of the requests
app.use(bodyParser.json());

app.get('/people', (req, res) => {
  res.send(people);
});

app.get('/people/:name', (req, res) => {
  const requestedName = req.params.name;
  const person = people.find((person) => person.name === requestedName);
  if (person === undefined) {
    res.send('Not found');
  } else {
    res.send(person);
  }
});

app.post('/people', (req, res) => {
  const reqBody = req.body;
  people.push(reqBody);
  res.send(people);
});

app.listen(3000, () => console.log('server is up on port 3000'));
