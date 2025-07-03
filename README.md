# 🕒 Timestamp Microservice

This is a backend API project built as part of the **FreeCodeCamp Back End Development and APIs Certification**.

The service accepts a date string or UNIX timestamp and returns a JSON response with both **Unix** and **UTC** time formats. It also handles errors and invalid dates gracefully.

---

## 🔗 Live Demo

[🌐 Click here to try the live API](https://7606f898-8871-40ea-a1b6-14c3489d7ef5-00-flppw179tsjr.pike.replit.dev)

---

## 📌 Features

- `GET /api/` → Returns the current timestamp in Unix and UTC
- `GET /api/:date` → Returns timestamp for a valid date string or Unix timestamp
- Invalid dates return a clear error message

---

## 🧪 Example API Endpoints

| URL Example                                          | Output Example                                                      |
|------------------------------------------------------|-------------------------------------------------------------        |
| `/api/`                                              | `{ "unix": 1624473000000, "utc": "Thu, 24 Jun 2021 18:30:00 GMT" }` |
| `/api/2015-12-25`                                    | `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }` |
| `/api/1451001600000`                                 | `{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }` |
| `/api/invalid-date`                                  | `{ "error": "Invalid Date" }`                                       |

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Hosted on Replit

---

## 📁 Project Structure

timestamp-microservice/

├── index.js # Main API logic

├── package.json # Dependencies

├── README.md # Project overview




---

## 📜 Certification

This project fulfills the **Timestamp Microservice** requirement for:
> 🏆 [FreeCodeCamp: Back End Development and APIs Certification](https://www.freecodecamp.org/)

---

## 🙋‍♀️ Author

**Prerana Bubbly**  
Aspiring Backend Developer | Java & Node.js Enthusiast  
🌐 [GitHub Profile](https://github.com/preranababali)


