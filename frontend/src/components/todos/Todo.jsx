import React from 'react';
import './todo.css';
import { GrCheckmark } from "react-icons/gr";
import { GiCrossMark } from "react-icons/gi";
import { FaSave } from "react-icons/fa";
import { MdDelete,MdEdit } from "react-icons/md";
function Todo({title, description, isCompleted, createdAt,_id , refresh}) {
  const [editstate,setEditstate] = React.useState(true);
  const [edittitle,setEdittitle] = React.useState('');
  const [edittext,setEdittext] = React.useState('');
  console.log(title);
  function deletetodo(id){
    fetch(`http://localhost:8000/tasks/${id}`,{
      method:'DELETE',
    }).then(data=>data.json()).then(d=>{
      console.log('deleted',d);
      refresh(prev=>!prev);
    }).catch(e=>console.log(e))
  }
  function edittodo(id, isCompleted) {
    fetch(`http://localhost:8000/tasks/${id}`,{
      method:'PUT',
      body: JSON.stringify({'isCompleted': !isCompleted}),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(data=>data.json()).then(d=>{
      refresh(prev=>!prev);
    }).catch(e=>console.log(e))
  }
  function updatedata(id){
    const data = {'title':edittitle,'description':edittext};
    fetch(`http://localhost:8000/tasks/${id}`,{
      method:'PUT',
      body: JSON.stringify(data),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(data=>data.json()).then(d=>{
      refresh(prev=>!prev);
      setEditstate(prev=>!prev);
    }).catch(e=>console.log(e))
  }
  React.useEffect(()=>{
    setEdittitle(title);
    setEdittext(description);
  },[])
  return (
    <div className='todocard'>
      <div className='title' style={isCompleted?{textDecoration:'line-through'}:null}>
      <input type="text" value={edittitle} disabled={editstate} onChange={(e)=>setEdittitle(e.currentTarget.value)}/>
      <div>
        {!isCompleted?<GrCheckmark className='icon' onClick={()=>edittodo(_id,isCompleted)}/>:<GiCrossMark className='icon' onClick={()=>edittodo(_id,isCompleted)}/>}
        {!isCompleted?(editstate?<MdEdit className='edit icon' onClick={()=>setEditstate(prev=>!prev)}/>:<FaSave className='icon' onClick={()=>updatedata(_id)}/>):null}
      <MdDelete className='delete icon' onClick={()=>deletetodo(_id)}/>
        </div>
      </div>
      {!isCompleted?<>
      <hr />
      <div className='description'>
      <input type="text" value={edittext} disabled={editstate} onChange={(e)=>setEdittext(e.currentTarget.value)}/>
      </div>
      </>:null
}
    </div>
  )
}

export default Todo
