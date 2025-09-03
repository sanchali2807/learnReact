
function Footer(){

    return(
        <footer>
            {/* to add js in the html use curly braces */}
            <p>&copy; {new Date().getFullYear()} Your website name</p>
        </footer>
    );
}

export default Footer