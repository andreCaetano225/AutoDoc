import type { NextPage } from 'next'
import { ContentItems } from '../components/contentItems'
import styles from '../styles/Home.module.scss'

const Local3: NextPage = () => {
    return (
        <div className={styles.container}>
            <ContentItems />
        </div>
    )
}

export default Local3
