import React from 'react'
import './input.css'
import {Btn} from '../'
function Input({refresh}) {
    const textareaRef = React.useRef(null);
    const [title_field,setTitle_field] = React.useState('')
    const [text_field,setText_field] = React.useState('')
    function expand(){
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }
    const pushtodo=()=>{
        if(title_field && text_field){
            let data = {'title':title_field,'description':text_field};
            fetch('http://localhost:8000/tasks',{
                method:'POST',
                body: JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then((data)=>data.json()).then(d=>{
                console.log("saved",d);
                setTitle_field('');
                setText_field('');
                refresh(prev=>!prev);
            }).catch(e=>console.log(e.message))
            console.log('entered',data);
        }
        else{
            console.log('not successfull');
            
        }
    }
  return (
    <div className='input_area'>
        <div className='input_field'>
            <input type="text" className='child_field' value={title_field} onChange={(e)=>setTitle_field(e.currentTarget.value)} id='todo_title'/>
            <textarea ref={textareaRef} name="todo_body" value={text_field} className='child_field' id="todo_body" onChange={(e)=>setText_field(e.currentTarget.value)} onInput={expand} cols="80" rows="1"/>
            <Btn pushtodo={pushtodo}/>
        </div>
    </div>
  )
}

export default Input
