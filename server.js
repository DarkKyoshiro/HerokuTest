const express = require('express');
const app = express();
app.use(express.static('./dist/heroku-test'));
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/heroku-test/'});
  });
app.listen(process.env.PORT || 8080);