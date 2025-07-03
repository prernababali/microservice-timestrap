const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Timestamp Microservice');
});

app.get('/api/:date?', (req, res) => {
  const dateString = req.params.date;
  let date;

  // Case 1: If no date is provided
  if (!dateString) {
    date = new Date();
  }
  // Case 2: If it's a number (timestamp)
  else if (!isNaN(dateString)) {
    date = new Date(parseInt(dateString));
  }
  // Case 3: Otherwise, try to parse it as a normal date string
  else {
    date = new Date(dateString);
  }

  // Handle invalid date
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  // Send the response
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





