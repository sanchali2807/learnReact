import PropTypes from 'prop-types'

// props is a JavaScript object
// Students is the child, App is the parent we need to send the data 
// function Students(props) {

// function Students({ name = "Guest", age = 0, isStudent = false }) {
//     return (
//         <div className="student">
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
//             {/* Boolean values don't render directly, so use ternary operator */}
//         </div>
//     );
// }


function Students({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <h2>isStudent: {isStudent ? "Yes" : "No"}</h2>
    </div>
  );
}

// ✅ match the prop names with what you use in JSX
Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// // ✅ default props should also match case
// Students.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false,
// }

export default Students
