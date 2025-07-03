const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS so FCC can test your API
app.use(cors());

// Home route (optional, just shows a message)
app.get('/', (req, res) => {
  res.send('Timestamp Microservice');
});

// Timestamp API Route
app.get('/api/:date?', (req, res) => {
  const dateString = req.params.date;
  let date;

  // If no date is provided
  if (!dateString) {
    date = new Date();
  }
  // If input is a number (timestamp)
  else if (!isNaN(dateString)) {
    date = new Date(parseInt(dateString));
  }
  // Otherwise, try parsing the date string
  else {
    date = new Date(dateString);
  }

  // Handle invalid date
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  // Respond with Unix and UTC
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Important for Render: use process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});






