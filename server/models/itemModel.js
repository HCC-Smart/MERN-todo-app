import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    item:{
        type:String,
    }
})

const items = mongoose.model('items', itemSchema);
export default items;
