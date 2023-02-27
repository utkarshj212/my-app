import './App.css';
import Student from './components/Student';
import Comp from './components/Comp';
function App() {
  return (
    <div classNmae="App">
      <Student
        name="utkarsh"
        age={24}
      />
      <Student
        name="priyanka"
        age={26}
      />
      <Student
        name="jain"
        age={2}
      />

    </div>
  );
}
export default App;
