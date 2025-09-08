
function ProfilePicture(){

    const imageUrl = './src/assets/img1.png';

    const handleCLick = (e) => e.target.style.display = "none";
    return(
        <img onClick={(e)=>handleCLick(e)} src={imageUrl}></img>
    );
}

export default ProfilePicture