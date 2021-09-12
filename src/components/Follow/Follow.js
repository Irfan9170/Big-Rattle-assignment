import React from 'react'

function Follow() {
    const data = localStorage.getItem("recent");

    return (
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Followed
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          
            <a class="dropdown-item" href="#">Action</a>
            </div>
      </div>
    )
}

export default Follow
