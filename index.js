const port = 4000
const express = require('express');
const app = express();
const usersRouter = require('./src/routes/users');
const dogsRouter = require('./src/routes/dogs');
const authRouter = require('./src/routes/auth');

app.use(express.json());
app.use(usersRouter)
app.use(dogsRouter);
app.use(authRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});