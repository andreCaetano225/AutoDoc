import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { ContentItems } from '../components/contentItems'
import { ResultApi } from '../interface/result';
import { api } from '../services/api';
import styles from '../styles/Home.module.scss'

const Local3: NextPage = () => {
    const [result, setResult] = useState<ResultApi>();

    useEffect(() => {
        api(-3.71839, -38.5434).get("").then(res => setResult(res.data))
        console.log(result)
    }, [])

    return (
        <div className={styles.container}>
            <ContentItems
                local={result?.name}
                temp={result?.main.temp}
                tempMan={result?.main.temp_max}
                tempMin={result?.main.temp_min}
                imgIcon={result?.weather[0].icon}
                altIcon={result?.weather[0].description}
            />
        </div>
    )
}

export default Local3
