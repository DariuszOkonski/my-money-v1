import styles from './Home.module.css';

import React from 'react'
import TransactionForm from './TransactionForm';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Transactions
      </div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  )
}