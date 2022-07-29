import type { NextPage } from 'next'
import { ContentItems } from '../components/contentItems'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ContentItems />
    </div>
  )
}

export default Home
