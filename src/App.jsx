import './App.css'
import Counter from './counter';
import Team from './team';
import Users from './users';

function App() {
  function handleClick(){
    alert('Button Clicked');
  }
  const handleClick2 = () => {
    alert('Button 2 Clicked');
  }
  const handleClick3 = (num) => {
    alert(num + 5);
  }


  return (
    <>      
      <h3>React core concepts part-2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={() => handleClick3(30)}>Click Me3</button>
    </>
  )
}

export default App
