import e from "express";
const router = e.Router();

router.use('/:id', (req, res) => {
    const id = req.params.id;

    fetch('http://localhost:3000/vehicles/'+id, {method: "GET"})
    .then(resposta => resposta.json()
    .then(resposta => res.render('edit', {dados: resposta})));
});

export default router;