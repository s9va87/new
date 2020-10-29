import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
    const initall = [ {id: 1, title: 'sport', done: false},
        {id: 2, title: 'hobby',},
        {id: 3, title: 'my',}]
const [list,setList] = useState( initall)

    const addButton = () => {
        const newTodo = {id: 4, title: 'work',}
const newList = [...list,newTodo]
        setList(newList)
    }
    const onDel = (todoId) => {
     const    newList = list.filter(el => el.id !==todoId)
        setList(newList)

    }



    return (
        <div>
            <button onClick={addButton}> add todo </button>
             {list.map  (el => <li key={el.id}>
                 {
                el.title
            }
<button onClick={onDel}>delete</button>
            </li>
             )}
        </div>
    );
}

export default App;
