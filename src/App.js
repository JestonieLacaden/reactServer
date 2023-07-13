import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [listInput, setListInput] = useState("")
  const [list, setList] = useState([])

  const ApiLink = async () => {
    const res = await axios.get('http://localhost:3001/lists')
    setList(res.data)
  };

  useEffect(() => {
    ApiLink()
  }, [])



  const sendList = async () => {
    await axios.post("http://localhost:3001/lists", { listInput })
    setList([...list, { listInput }])
  }
  return (



    <div className="App">
      <div className='container d-flex justify-content-center flex-column align-items-center'>
        <h1>Todo List</h1>
        <input type='text' value={listInput} onChange={(event) => setListInput(event.target.value)} placeholder='Type your Todo List'></input>
        <button className='btn btn-primary mt-2'>Add to do List</button>
        <h3 className='align-self-start ms-4'>LIST</h3>
        <ul className='align-self-start'>
          {list.map((listInput) => (
            <li>{listInput.listInput}</li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
