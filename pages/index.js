import Header from '../components/Header'
import styles from '../styles/Home.module.scss'
import Directory from './Directory/directory'


export default function Home() {
  return (
    <div className={styles.homepage}>
      <Header />
      <Directory />
    </div>
  )
}
