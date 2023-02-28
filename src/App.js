import './App.css';
// import Student from './components/Student';
// import Comp from './components/Comp';
 import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movie.json'


function App() {
  return (
    <div classNmae="App">
      {/* <Student
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
      /> */ 
           
      }
      <Header/> 
      <div classNmae='main'>

{
  movies.map((element, index) =>{
    return(
  <Movie 
  key={index}
    title={element.Title}
    year={element.Year}
    img={element.Poster}
  />
    )
})
}
</div>
    </div>
  );
}
export default App;
