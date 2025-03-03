// import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

// const Todos = () => {
//     const [item, setItem] = useState("")
//     const [data, setData] = useState([])
//     const [editing, setEditing] = useState(false);
//     const [editIndex , setEditIndex] = useState(null)
 
//     const get = (event) => {

       
    
//         setItem(event.target.value)


//     }

//     const getData = () => {

//     if(item.trim() === ""){

//         alert("please enter a task ")
//         return;
//     }

//         if (editing) {
            
//             let updatedData = [...data]; 
//             updatedData[editIndex] = item; 
//             setData(updatedData); 
    
            
//             setEditing(false); 
//             setEditIndex(null);
//         }else{

//             setData([...data, item]) 
            
           


//         }
//         setItem(" ");



//     }
//     const deleteTask = (index) => {

//         let filterdata = data.filter((curElm, id) => {
//             return id !== index
//         })
//         setData(filterdata)
//     }

// const editTask =(index)=>{



// setItem(data[index]);   
//     setEditing(true); 
//     setEditIndex(index);
// }

//     return (
//         <div className='container mt-5'>
//             <div className='input-group mb-3 table-responsive'>
//                 <input type="text" 
//                 placeholder='Enter your task'
//                 className="form-control"
//                  value={item} 
//                  onChange={get}
//                  style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}
//                  />
//                 <button   className="btn btn-primary" onClick={getData}>

//                 {editing ? "Update Task" : "Add Task"}
//                     </button>

//             </div>
          

// <div className='table-responsive'>



//             <ul className="list-group">
//                 {data.map((curVal, index) => (
//                     <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                         <span>{curVal}</span>
//                         <div>
//                             <button className="btn btn-sm btn-warning me-2" onClick={() => editTask(index)}>
//                                 Edit
//                             </button>
//                             <button className="btn btn-sm btn-danger" onClick={() => deleteTask(index)}>
//                                 Delete
//                             </button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//     </div>


            
//         </div>
//     )
// }

// export default Todos;



import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todos = () => {
  const [item, setItem] = useState('');
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const get = (event) => {
    setItem(event.target.value);
  };

  const getData = () => {
    if (item.trim() === '') {
      alert('Please enter a task');
      return;
    }

    if (editing) {
      let updatedData = [...data];
      updatedData[editIndex] = item;
      setData(updatedData);
      setEditing(false);
      setEditIndex(null);
    } else {
      setData([...data, item]);
    }
    setItem('');
  };

  const deleteTask = (index) => {
    let filterdata = data.filter((curElm, id) => {
      return id !== index;
    });
    setData(filterdata);
  };

  const editTask = (index) => {
    setItem(data[index]);
    setEditing(true);
    setEditIndex(index);
  };

  return (
    <div className="container mt-5">
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Enter your task"
          className="form-control"
          value={item}
          onChange={get}
          style={{ whiteSpace: 'nowrap', overflowX: 'auto' }}
        />
        <button className="btn btn-primary" onClick={getData}>
          {editing ? 'Update Task' : 'Add Task'}
        </button>
      </div>

      
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((curVal, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{curVal}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => editTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;

