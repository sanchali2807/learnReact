
import profilePic from './assets/img1.png'
function Card(){
return(
    <div className="card">
        <img className='card-image' src={profilePic} alt="profile picture"></img>
        <h2 className='title'>Sanchali</h2>
        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

    </div>
);
}

export default Card