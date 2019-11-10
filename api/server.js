const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
// routes
const orgsRouter = require('./routes/orgs');
const teamsRouter = require('./routes/teams');
const usersRouter = require('./routes/users');
const locationsRouter = require('./routes/locations');
const statusesRouter = require('./routes/statuses');
const levelsRouter = require('./routes/seclevels')
// checks to see if the content-type is json and parses it into req.body
app.use(bodyParser.json());
// log all requests

app.use('/orgs', orgsRouter);
app.use('/teams', teamsRouter);
app.use('/users', usersRouter);
app.use('/locations', locationsRouter);
app.use('/status', statusesRouter);
app.use('/levels', levelsRouter);

// four params are required to mark this as a error handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  error('ERROR FOUND:', err);
  res.sendStatus(500);
});
app.listen(port, () => console.log(`Listening on port ${port}`));