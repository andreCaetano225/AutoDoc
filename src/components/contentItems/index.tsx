import styles from "./contentItems.module.scss";

export const ContentItems = () => {
    return (
        <>
            <div className={styles.containerContentItems}>
                <div>
                    <section>
                        <h3>Local 3</h3>
                        <h1>200 °C</h1>
                    </section>

                    <div>
                        <h3>Máx: 245 °C</h3>
                        <h3>Min: 245 °C</h3>
                    </div>
                </div>
            </div>
        </>
    );
};