const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hii And this is my first automated pipeline using target server using webhooks');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
