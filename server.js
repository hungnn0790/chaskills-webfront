import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express(); // Our express server!
const port = process.env.PORT || 8081;

// Body parser and Morgan middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// We tell express where to find static assets
app.use(express.static(__dirname + '/dist'));

// ...For all the other requests just sends back the Homepage
app.route("*").get((req, res) => {
  res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(port);

console.log(`listening on port ${port}`);