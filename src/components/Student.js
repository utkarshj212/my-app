import Comp from "./Comp";
import propTypes from 'prop-types'

const Student = (props) => {
  return (
<>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <Comp name={props.name} />
</>
  )
}
//props types
Student.propTypes={
  name:propTypes.string,
  age: propTypes.number

}
export default Student;

// 2 method for props
// const Student = ({name,age}) => {
//   return (
// <>
//<h1>{name}</h1>
//<h1>{age}</h1>
// </> )}
// export default Student;