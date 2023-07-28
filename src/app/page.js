import styles from './page.module.css'
// components
import Navbar from '@/components/Navbar'
import SingleInvoice from '@/components/SingleInvoice'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.invoiceContainer}>
        <SingleInvoice/>
        <SingleInvoice/>
        <SingleInvoice/>
      </div>
    </main>
  )
}
