const Item = require('../Model/itemModel');

const allItems = async(req, res)=>{
    const Items = await Item.find();
    res.json(Items)
}

const postItem = async(req, res)=>{
    let result = await Item.create({
        item: req.body.item,
        quantity: req.body.quantity,
        price: req.body.price
    });
    res.send(result);
}

const updateItem = async(req, res)=>{
    const {itemID} = req.params;
    let result = await Item.findByIdAndUpdate(itemID, req.body)
    res.json(result)
}

const deleteItem = async(req, res)=>{
    const {itemID} = req.params;
    await Item.findByIdAndDelete(itemID)
    res.send("Deleted Successfully!!!!");
}


module.exports = {postItem, updateItem, deleteItem, allItems}