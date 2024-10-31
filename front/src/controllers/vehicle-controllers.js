import fetch from 'node-fetch';

function store(req, res) {
    const model = req.body.model;
    const plate = req.body.plate;
    const year = req.body.year;
    const owner = req.body.owner;

    const data = {
        model,
        plate,
        year,
        owner
    }

    fetch('http://localhost:3000/vehicles', {
        method: "POST",
        body: JSON.stringify(data),
        hearders: {'Content-Type': 'application/json'}
    })
    .then(res.redirect('/'));
}

export default {
    store
}