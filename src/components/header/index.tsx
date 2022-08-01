import { useEffect } from "react";
import { api } from "../../services/api";
import styles from "./header.module.scss";

export const Header = () => {




    return (
        <>
            <div className={styles.containerHeader}>
                <img src="./Logo-Autodoc.svg" alt="LogoAutoDoc" />
                <div>
                    <a href="./">Local 1</a>
                    <a href="">Local 2</a>
                    <a href="">Local 3</a>
                </div>
            </div>
        </>
    );
};