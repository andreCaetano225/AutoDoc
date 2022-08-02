
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ResultApi } from '../interface/result';
import { api } from '../services/api';
import styles from '../styles/Home.module.scss'

const ResumoTemp: NextPage = () => {
    const [result, setResult] = useState<ResultApi>();

    useEffect(() => {
        api(-5.79448, -35.211).get("").then(res => setResult(res.data))
        console.log(result)
    }, [])

    return (
        <>
            <div>
                <h2>Temp: local </h2>
            </div>
        </>
    );
}

export default connect(state => ({
    // temp: state.temp,
}))(ResumoTemp)
