import React, { useState } from 'react'


const Todos = () => {
    const [item, setItem] = useState("")
    const [data, setData] = useState([])
    const [editing, setEditing] = useState(false);
    const [editIndex , setEditIndex] = useState(null)
 
    const get = (event) => {

        setItem(event.target.value)


    }

    const getData = () => {

        if (editing) {
            
            let updatedData = [...data]; 
            updatedData[editIndex] = item; 
            setData(updatedData); 
    
            
            setEditing(false); 
            setEditIndex(null);
        }else{

            let store = [...data, item]
            setData(store)
           


        }
        setItem(" ");



    }
    const deletTask = (index) => {

        let filterdata = data.filter((curElm, id) => {
            return id !== index
        })
        setData(filterdata)
    }

const editTask =(index)=>{



setItem(data[index]);   
    setEditing(true); 
    setEditIndex(index);
}

    return (
        <div className='container'>
            <div className='task-input'>
                <input type="text" placeholder='Enter your task' value={item} onChange={get} />
                <button onClick={getData}>

                {editing ? "Update Task" : "Add Task"}
                    </button>

            </div>
            {data.map((curVal, index) => {

                return <>

                    <div className="taskData">
                        <p>{curVal}</p>
                        <i id="editicon" onClick={() => editTask(index)} className="fa-solid fa-pen"></i>
                        <i id="dlticon" onClick={() => deletTask(index)} class="fa-solid fa-trash"></i>


                    </div>
                </>

            })}
        </div>
    )
}

export default Todos;
