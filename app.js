const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/Members', (req, res) => {
    res.render('members');
});

app.get('/Music', (req, res) => {
    res.render('music');
});

app.get('/MVs', (req, res) => {
    res.render('mvs');
});

app.get('/Shows', (req, res) => {
    res.render('liveshow');
});

app.get('/Inicio', (req, res) => {
    res.render('inicio');
});

app.get('/Registro', (req, res) => {
    res.render('registro');
});

const port = 3002;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}...`);
});
