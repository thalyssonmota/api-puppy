const port = 4000
const express = require('express');
const app = express();
const usersRouter = require('./src/routes/users');
const dogsRouter = require('./src/routes/dogs');

app.use(express.json());
app.use(usersRouter)
app.use(dogsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});