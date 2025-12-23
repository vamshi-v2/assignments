const  Router = require ('express');
const { createUser, deleteUser, updateUser, getUserById, getUsers,submitCreateUser, submitUpdateUser } = require ('../controller/viewController');
const router = Router();

router.get('/', getUsers);
router.get('/create', createUser);
router.post('/create', submitCreateUser);
router.get('/:id', getUserById);
router.get('/update/:id', updateUser);
router.post('/update/:id', submitUpdateUser);
router.get('/delete/:id', deleteUser);

module.exports = router;
