/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
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
                    <a href="local2">Local 2</a>
                    <a href="/local3">Local 3</a>
                </div>
            </div>
        </>
    );
};