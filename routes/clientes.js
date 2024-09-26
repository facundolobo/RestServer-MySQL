const { Router } = require('express');
const { clientesGet, 
clientesPost, 
clientesPut, 
clientesDelete, 
clientesPatch, } = require('../controllers/clientes');
const { validaJWT } = require('../middlewares/validar-jwt');

const router = Router();


router.get('/', 
    validaJWT
    , clientesGet);
router.put('/:id',
    validaJWT
      ,  clientesPut);
router.post('/', 
    validaJWT
    ,  clientesPost);
router.delete('/',
    validaJWT
      ,clientesDelete);


module.exports = router;