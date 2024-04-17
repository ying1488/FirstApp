const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got a new request")
//   res.send('<h1>this is my page</h1>')
// })

app.get('/cats', (req, res) => {
  console.log("cat request!!")
  res.send('<h1>cat page </h1>')
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>Browsing the ${subreddit} page`)
})

app.post('/cats', (req, res) => {
  res.send('post request to /cats!! this is different')
})
app.get('/dogs', (req, res) => {
  console.log("dog request")
  res.send('<h1>dog page </h1>')
})

app.get('/', (req, res) => {
  res.send('<h1>welcome to homepage</h1>')
})


// /cats =>'meow'
// /dogs =>'woof
// '/'  

app.listen(3000, () => {
  console.log(`listening on port 3000!`)
})