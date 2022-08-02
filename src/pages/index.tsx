import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { ContentItems } from '../components/contentItems'
import { ResultApi } from '../interface/result'
import { api } from '../services/api'
import { connect, useDispatch } from 'react-redux'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  const [result, setResult] = useState<ResultApi>();

  useEffect(() => {
    api(-22.9035, -43.2096).get("").then(res => setResult(res.data))
    console.log(result)
  }, [])

  const dispatch = useDispatch();





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

      <button onClick={() => dispatch({ type: "ADD_TEMP", result })}>ReduxTest</button>
    </div>
  )
}

export default connect()(Home);
