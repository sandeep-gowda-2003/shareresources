import React from 'react'
import './home.css'
import {Todo, Input} from '../'
function Home() {
    const [todos_var, setTodos_var] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [refresh, setRefresh] = React.useState(false)
    React.useEffect(()=>{
        fetch('http://localhost:8000/tasks',{
            method:'GET'
        }).then(data=>data.json()).then(d => {
            setTodos_var(d)
            setLoading(false);            
        }).catch(e=>console.log(e));
    },[refresh])
    console.log(todos_var);
    
  return (
    loading?<div className='loading'>Loading...</div>:<div><Input refresh={setRefresh}/>{todos_var.map(e=><div key={e['createdAt']}><Todo refresh={setRefresh} {...e} /></div>)}</div>
  )
}

export default Home
