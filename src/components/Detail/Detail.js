import React from 'react'

function Detail(props) {
    return (
        <>
            <h1>{props.name}</h1>
             <a  class=" profile-image" data-toggle="dropdown">
        <img src={props.photo} class="img-circle special-img"/></a>
               
        </>
    )
}

export default Detail;
