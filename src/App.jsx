// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookSore'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

function App() {
  // const [count, setCount] = useState(0)
  const actors = [ 'Shakib', 'Tamim', 'miraj'];
  const singers = [
    {name: 'Mahafuj', age: 68},
    {name: 'Liton', age: 38},
    {name: 'Pritom', age: 58},
    {name: 'Ganja', age: 78},

  ];
  
  const books =[
    {id: 1, name: 'physics', price: 120},
    {id: 2, name: 'Chemistry', price: 120},
    {id: 3, name: 'Math', price: 120},
    {id: 4, name: 'Biology', price: 120}
  ]

  function handleClick(){
    alert('Click The Button')
  }
  const pera = (num) => {
    alert(num +10);
  }
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={()=> pera(45)}>Pera</button>
      <BookStore books={books}></BookStore>

      {
        singers.map(sing => <Singer singer={sing}></Singer>)
      }
      <Actor kayum={'BappaRaj'}></Actor>
      {
        actors.map(actor => <Actor kayum={actor}></Actor>)
      }
    
    </>
  )
}

export default App
