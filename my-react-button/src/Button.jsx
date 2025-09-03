
// import styles from './Button.module.css'
//  in case of modules for modules we need to create a new folder

function Button(){
    // for inline styling we need every value in string and every key should follow camel case and separated by a comma
    const styles = {
  backgroundColor:"hsl(200,100%,50%)",
  color: "white",
  padding: "10px 20px",
  bordeRadius: "5px",
  border: "none",
  cursor: "pointer",
    }
return(
    <button style={styles}>click me</button>
    // <button className="button">Click Me</button>
    // <button className={styles.button}>Click Me</button>
);
}

//  we use modules to avoid naming conflicts but to use that modules css or any other file we need to import it and then set the className as that import name this way that classname is unique it is created via hash
export default Button

