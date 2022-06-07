const express = require('express');
const router = express.Router();
const {postItem, updateItem, deleteItem, allItems} = require('../Controllers/itemController')

router.get('/home', allItems)
//router.get('/add', addItems)
//router.get('/edit', editItems)


router.post('/home', postItem)
router.patch('/home/:itemID', updateItem)
router.delete('/home/:itemID', deleteItem)


module.exports = router;