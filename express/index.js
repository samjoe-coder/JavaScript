import express from 'express';

const app = express();

//routes

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('App is running on port 3000');
});