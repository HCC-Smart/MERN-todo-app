import items from "../models/itemModel.js";


export  const AddItem =async(req,res)=>{
  try {
    const add = items(req.body).save();
    res.json({'status': true, "added": add})
  } catch (err) {
    res.json({'status': false, "message": err})

  }
}

export  const getAllitems = async(req,res)=>{
    try {
        const getAll = await items.find();
        res.json({'status': true, "getAll": getAll})

    } catch (err) {
        res.json({'status': false, "message": err})

    }
}
//update items

export const updateItems = async(req,res)=>{
    try {
        const {item} = req.body
        const {_id}= req.params
        const update = await items.findByIdAndUpdate(_id, {item})
        res.json({'status': true, "updated": update})

    } catch (err) {
        res.json({'status': false, "message": err})

    }
}

export const deleteItem = async(req,res)=>{
    try {
        const {_id} = req.params
        const deleteItem = await items.findOneAndDelete(_id)
        res.json({'status': true, "deleted an item": deleteItem})

    } catch (err) {
        
    }
}