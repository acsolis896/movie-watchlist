import React from "react"

export default function Main() {
    return (
    <div className="main">
        <div id="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" id="search" placeholder='Search for a movie'/>
            <button id="search-btn">Search</button>
        </div>
        
        <div id="explore-placeholder">
            <i class="fa-solid fa-film"></i>
            <p>Start exploring</p>
        </div>
        
        <div id="movies-info">
            {/* <!-- Movie options render here --> */}
        </div> 
    </div>
  
    )
}