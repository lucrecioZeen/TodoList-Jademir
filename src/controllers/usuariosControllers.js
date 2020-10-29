exports.listAll = (req, res) => {
    let usuarios = [
        {
            nome: 'teste 01',
            email: 'teste01@email.com'
        },
        {
            nome: 'teste 02',
            email: 'teste02@email.com'
        }
    ]
    res.send(usuarios)
}

exports.createOne = (req, res) => {
    let response = {
        message: 'Usuario criado com sucesso',
        data: req.body
    }
    res.send(response)
}