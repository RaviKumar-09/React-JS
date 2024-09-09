import profilePic from './assets/profile.png'
function Card(){
    return(
        <div className="card">
            <img className="card-image"src={profilePic} alt="profile picture" />
            <h2 className='card-tittle'>Ravi Kumar</h2>
            <p className='card-text'>I am a Web Developer and play vedio games.</p>
        </div>

    );

}
export default Card