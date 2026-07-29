import './App.css'
import { useState, useRef } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

const mockData = [
  {
    id: 0,
    state: false,
    content: ""
  }
];

function App() {
  const [todo, setTodo] = useState(mockData);
  const idCount = useRef(1);
  const onCreate = (content) => {
    console.log('app', content)
    const newTodo = {
      id: idCount.current++,
      state: false,
      content: content
    }

    setTodo([newTodo, ...todo]);
  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todo={todo}/>
    </div>
  )
}

export default App;
