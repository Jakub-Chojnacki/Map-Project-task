import styles from './History.module.css'
import React from 'react'

const History = () => {
    
    const history = JSON.parse(localStorage.getItem("searches"))
    const elements = history.map((search)=> {
        return(
            <div className={styles.item} key={search.id}>
             <span>From</span> {search.addressA} <span>To</span> {search.addressB}
            </div>
        )
        
    })
    return (
        <React.Fragment>
          {elements}
        </React.Fragment>
    )
}

export default History