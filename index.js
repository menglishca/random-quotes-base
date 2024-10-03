const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.redirect('/quotes');
});

app.post('/quotes', (request, response) => {
    const { quote } = request.body;
    response.redirect('/quotes');
});

app.get('/quotes/:id', (request, response) => {
    const { id } = request.params;
    const quote = null;
    if (quote) {
        
    }
    else {
        response.status(404).send("Quote not found");
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
