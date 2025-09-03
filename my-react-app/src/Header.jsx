

function Header(){

    // within return statement you can write pure html

return(
<header>
    {/* react components are only capable of returning a single element but we can make children elements in this */}
    <h1>my website</h1>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </nav>
    <hr></hr>

</header>

);
}

export default Header