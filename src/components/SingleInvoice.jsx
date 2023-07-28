import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import styles from './singleInvoice.module.css'
// components
import Button from './common/Button'
const SingleInvoice = () => {
  return (
    <div className={styles.main}>
        <h4>#RT3080</h4>
        <p>Due 19 Aug 2021</p>
        <p>Jensen Huang</p>
        <h2>$1,800.90</h2>
        <div>
            <Button/>
            <span>
                <BiChevronRight className={styles.icon}/>
            </span>
        </div>
    </div>
  )
}

export default SingleInvoice