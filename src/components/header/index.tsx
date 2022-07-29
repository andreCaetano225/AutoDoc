import styles from "./header.module.scss";

export const Header = () => {
    return (
        <>
            <div className={styles.containerHeader}>
                <img src="./Logo-Autodoc.svg" alt="LogoAutoDoc" />
            </div>
        </>
    );
};