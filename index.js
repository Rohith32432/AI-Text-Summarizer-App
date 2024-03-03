const express = require('express');
const app = express();
const port = 3000;
const summarizeText = require('./summarize.js');
const dotenv=require('dotenv')
dotenv.config()
app.use(express.json());
app.use(express.static('public'));

app.post('/summarize', (req, res) => {
  const text = req.body.text_to_summarize;

  summarizeText(text)
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      console.log(error.message);
    });
});
console.log(process.env.ACCESS_TOKEN);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
 