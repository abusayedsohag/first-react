import './App.css'
import Counter from './Counter';
import FetchUsers from './FetchUsers';

function App() {

  function handleClick() {
    alert('Fail');
  }

  function handleClick2(num) {
    alert(num + 55);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <Counter>ff</Counter>
      <FetchUsers></FetchUsers>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => {handleClick2(5454)}}>Click me 2</button>
    </>
  )
}

export default App
