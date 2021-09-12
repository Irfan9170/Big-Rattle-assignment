import React from 'react'
import Follow from '../Follow/Follow';
import styles from './Details.module.css'
function Detail(props) {
    return (
        <>
         <div class="d-flex flex-row">
                <div class="p-2"><h1>{props.name}</h1></div>
                <div class="p-2"><Follow /></div>
                <div class="p-2"><img src={props.photo} className={styles.profilePhoto}/></div>
        </div>
        </>
    )
}

export default Detail;
