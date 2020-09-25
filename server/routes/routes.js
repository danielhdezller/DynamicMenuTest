const router = require('express').Router();

const menuControllers = require('../controllers/menuController');
const userControllers = require('../controllers/userController');

router.get('/menu', menuControllers.getAll);
router.post('/menu', menuControllers.postOne);

router.get('/register', userControllers.getUser);
router.post('/register', userControllers.create);
router.post('/login', userControllers.login);


module.exports = router