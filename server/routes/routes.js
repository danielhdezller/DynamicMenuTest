const router = require('express').Router();

const menuControllers = require('../controllers/menuController');
const userControllers = require('../controllers/userController');

router.get('/menu', menuControllers.getAll);
router.post('/menu', menuControllers.postOne);

router.get('/register', userControllers.getAll);
router.post('/register', userControllers.postOne);


module.exports = router