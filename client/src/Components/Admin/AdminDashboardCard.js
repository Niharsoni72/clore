import React from 'react'
import styles from '../../CSS/Admin/AdminDashboardCard.module.css';
const AdminDashboardCard = (props) => {
  return (
    <div className={styles.main_card}>
        <h5>{props.header}</h5>
        <hr/>
        <h2>{props.value}</h2>
    </div>
  )
}

export default AdminDashboardCard