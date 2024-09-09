import profilePic from './assets/profile.png'
function Card(){
    return(
        <div className="card">
            <img className="card-image"src={profilePic} alt="profile picture" />
            <h2>Ravi Kumar</h2>
            <p>I am a Developer and play vedio games.</p>
        </div>

    );

}
export default Card