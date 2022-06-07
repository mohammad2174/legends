import Header from '../components/Header'
import styles from '../styles/Home.module.scss'
import Directory from './Directory/directory'
import { HomePageContainer } from './homePage'


export default function Home() {
  return (
    <HomePageContainer className={styles.homepage}>
      <Header />
      <Directory />
    </HomePageContainer>
  )
}
