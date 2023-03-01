import './App.css';
// import Student from './components/Student';
// import Comp from './components/Comp';
 import Header from './components/Header';
import Movie from './components/Movie';
import movies from './movie.json'


function App() {
  let login=false;

  return (
    <div classNmae="App">
{
login == false ? <h1>hellp world</h1> : <div>bye</div>
//ternarey operator
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
