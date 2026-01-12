const  Router = require ('express');
const { createUser, deleteUser, updateUser, getUserById, getUsers,submitCreateUser, submitUpdateUser, login, submitLogin } = require ('../controller/viewController');
const router = Router();
const { isLogged } = require('../middleware/checklogin')

router.get('/login', login);
router.post('/login', submitLogin);

router.get('/users', isLogged, getUsers);

router.get('/register', createUser);
router.post('/register', submitCreateUser);

router.get('/users/:id', isLogged, getUserById);

router.get('/users/update/:id', isLogged, updateUser);
router.post('/users/update/:id', submitUpdateUser);

router.get('/users/delete/:id', deleteUser);

module.exports = router;
