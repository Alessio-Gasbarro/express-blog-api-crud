const express = require('express');

//ROUTER CLASS
const router = express.Router();

//CONTROLLER
const postsController = require('../controllers/postsController.js');

//LIST OF CRUD
//GET ALL POSTS
router.get('/', postsController.index);

//GET PER ID
router.get('/:id', postsController.show);

//CREATE NEW
router.post('/', postsController.store);

//UPDATE PER ID
router.put('/:id', postsController.update);

//MODIFY PER ID
router.patch('/:id', postsController.modify);

//DELETE PER ID
router.delete('/:id', postsController.destroy);

//EXPORT
module.exports = router;