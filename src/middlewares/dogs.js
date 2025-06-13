function validateCreateDogs (req, res, next) {
    const { namedog, agepet, pedigree, genero, raca, chip,image_url } = req.body;

    if (!namedog || !agepet || !pedigree || !genero || !raca || ! chip || !image_url) {
        return res.status(400).send('Todos os campos são obrigatórios')
    }

    if (namedog.length > 50) {
        return res.status(400).send('O nome do produto não pode ter mais de 50 caracteres')
    }

    if (agepet > 0) {
        return res.status(400).send('Idade deve ser maior que 0')
    }
   
    if (typeof pedigree !== 'boolean') {
        return res.status(400).send({error:'Pedigree deve ser True ou False'})
    }
    
    if ( genero !== 'Macho' || genero !=='Fêmea' ) {
        return res.status(400).send({error:'Pedigree deve ser Macho ou Fêmea'})
    }
   
    if (raca.length < 25) {
        return res.status(400).send('O nome raca deve conter no máximo 25 caracteres')
    }

    if (typeof chip !== 'boolean') {
        return res.status(400).send({error:'Chip deve ser True ou False'})
    }

    if (image_url.length < 250) {
        return res.status(400).send('Url deve conter no máximo 250 caracteres')
    }


    next();
}

function validateDeleteDogs(req, res, next) {
    const { id } = req.params;

    if(!id) {
        return res.status(400).send('ID do produto é obrigatório')
    }

    next ();
}
module.exports = {
    validateCreateDogs,
    validateDeleteDogs
}