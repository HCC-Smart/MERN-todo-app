import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
const [itemsText, setItemText] = useState('');
const [listItems, setListItems] = useState([]);
const [updated, setUpdated] = useState('')

const addItem= async (e)=>{
  e.preventDefault();
try {
  const res = await axios.post('http://localhost:9000/api/add-item', {item:itemsText})
setItemText('');  
} catch (err) {
  console.log(err);
}
}

//get all items
useEffect(()=>{
  const getAll = async()=>{
  const res = await axios.get('http://localhost:9000/api/get-item')
  setListItems(res.data.getAll);
try {
  
} catch (err) {
  console.log(err);
}

}
getAll();
},[listItems]);

const deleteItem = async(_id)=>{
try {
  const res = await axios.delete(`http://localhost:9000/api/delete-item/${_id}`)
const newList = listItems.filter(item=> item._id !== _id)
console.log(newList);
} catch (err) {
  
}
};

const UpdateRender = ()=>(
<form>
  <input type="text"/>
  <button className='btn btn-primary' type='submit'>Update</button>
</form>
);

  return (
   <>
   <form onSubmit={e => addItem(e)}>
    <div className="text-success d-flex justify-content-center">
      
      <h1>To do list App</h1>
      </div>
      <div className="d-flex justify-content-center p-4"> 
      <input  type="text" className=""  onChange={e =>{setItemText(e.target.value)}} value={itemsText}/>
      <button type="submit" className="">Add</button>
      </div>
   </form>
   <div className="">
   {
    
    listItems.map(item =>(
      <div className=" items d-flex justify-content-center">
        {
          updated === item._id
          ? UpdateRender()
          :
          <>
          <p className="item" >{item.item}</p>
      <button className="btn btn-success" onCanPlay={() => {setUpdated(item._id)}}>Update</button>
      <button className="btn btn-danger" onClick={()=>{deleteItem(item._id)}}> Delete</button>
          </>
        }
      
    </div>
    ))
   }
   </div>
   </>
  );
}

export default App;
