const  Router = require ('express');
const { createUser, deleteUser, updateUser, getUserById, getUsers, main } = require ('../controller/userController');
const router = Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/main', main)


module.exports = router;
