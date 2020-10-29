
module.exports = function (app) {
    const usuarios = require('../controllers/usuariosControllers.js')
    app.route('/usuarios')
        .get(usuarios.listAll)
        .post(usuarios.createOne)
}