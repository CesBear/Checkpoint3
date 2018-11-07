const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.get('/', (req, res) => {
    res.send({ usuarios: 'test usuarios'});
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
    });
}

app.listen(process.env.PORT || 5000);

