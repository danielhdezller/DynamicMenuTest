const router = require('express').Router();

const menuControllers = require('../controllers/menuController');
const userControllers = require('../controllers/userController');

router.get('/menu', menuControllers.getAll);
router.post('/menu', menuControllers.postOne);

router.get('/user', userControllers.getAll);
router.post('/user', userControllers.postOne);


module.exports = router