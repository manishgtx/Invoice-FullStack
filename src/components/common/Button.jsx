import React from 'react'
import styles from './button.module.css'
const Button = ({paymentStatus}) => {
    if(paymentStatus === 0) {
        return (
          <div className={styles.btn}>Pending</div>
        )
    } else if (paymentStatus === 1) {
        return (
            <div className={styles.btn}>Paid</div>
          )
    } else {
        return (
            <div className={styles.btn}>Draft</div>
          )
    }
}

export default Button