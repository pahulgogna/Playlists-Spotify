

function Playlist(props){
    return (
        <div style={{width:'20%', display:'inline-block'}} className="playlist-container-home-page">
            <img />
            <h3>{ props.name || "Plalist Name"}</h3>
            <ul>
                {(props.songs && props.songs.map((songName, index) => 
                    <li key={index}>{songName}</li> 
                ))|| <li>Song Names</li>}
            </ul>
        </div>
    )
}

export default Playlist