import { useEffect } from "react";
import { api } from "../../services/api";
import styles from "./header.module.scss";

export const Header = () => {


    useEffect(() => {
        api.get("").then(res => console.log(res.data))
        // fetch("https://api.openweathermap.org/data/2.5/weather?lat={-3.71839}&lon={-38.5434}&appid={a4b3e64cf7e3099b88dd0cea280d56e0}").then(res => console.log(res))
    }, [])


    return (
        <>
            <div className={styles.containerHeader}>
                <img src="./Logo-Autodoc.svg" alt="LogoAutoDoc" />
            </div>
        </>
    );
};