import e from "express";
const router = e.Router();

router.get('/', (req, res) => {
    fetch('http://localhost:3000/vehicles', {method: "GET"})
    .then(resposta => resposta.json()
    .then(resposta => res.render('home', {dados: resposta}))); 
});

export default router;