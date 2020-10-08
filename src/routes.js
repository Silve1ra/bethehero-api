const express = require('express');

// const SessionController = require('./controllers/SessionController');
// const OngController = require('./controllers/OngController');
// const IncidentController = require('./controllers/IncidentController');
// const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: 'API Working!'});
});

routes.post('/sessions', (req, res)=>{
    const ong = "APAD";

    if (!ong) res.status(400).json({ error: 'ONG not found using this ID' });

    return res.json(ong);
});

routes.get('/ongs', (req, res) => {
    res.json(
        [{
            "id": "23ce43db",
            "name": "APAD",
            "email": "apad@apad.com",
            "whatsapp": "111111111",
            "city": "Sao Paulo",
            "uf": "SP"
        },
        {
            "id": "0dc0b757",
            "name": "APAD2",
            "email": "apad2@apad.com",
            "whatsapp": "1222222222",
            "city": "Rio de Janeiro",
            "uf": "RJ"
        }]);
});
// routes.post('/ongs', OngController.store);

routes.get('/incidents', (req, res)=>{
    res.json(
        [{
            "id": 1,
            "title": "Cachorro atropelado",
            "description": "Precisamos fazer uma cirurgia",
            "value": 240,
            "ong_id": "23ce43db"
        },
        {
            "id": 2,
            "title": "Gato pulou da arvore",
            "description": "Precisamos comprar uma coleira",
            "value": 120,
            "ong_id": "23ce43db"
        }
    ]
    )
});
// routes.post('/incidents', IncidentController.store);
// routes.delete('/incidents/:id', IncidentController.destroy);

routes.get('/profiles', (req, res)=>{
    res.json(
        [
            {
                "id": 1,
                "title": "Caso 02",
                "description": "Detalhes do caso apad2",
                "value": 999,
                "ong_id": "23ce43db"
            },
            {
                "id": 2,
                "title": "Caso 02",
                "description": "Detalhes do caso apad2",
                "value": 999,
                "ong_id": "23ce43db"
            },
            {
                "id": 3,
                "title": "Cachorrinha atropelada",
                "description": "Uma cachorrinha foi atropelada na manha desta quarta feira",
                "value": 720,
                "ong_id": "23ce43db"
            }
        ]
    )
});

module.exports = routes;