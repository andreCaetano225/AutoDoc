import styles from "./contentItems.module.scss";

interface PropsContentItems {
    local: any;
    temp: any;
    tempMan: any;
    tempMin: any;
    imgIcon: any;
    altIcon: any;
}

export const ContentItems = (props: PropsContentItems) => {
    return (
        <>
            <div className={styles.containerContentItems}>
                <div className={styles.divItems}>
                    <div>
                        <section>
                            <h3>{props.local}</h3>
                            <h1>{props.temp}</h1>
                        </section>

                        <div>
                            <h3>Máx: {props.tempMan} °C</h3>
                            <h3>Min: {props.tempMin} °C</h3>
                        </div>
                    </div>
                    <img src={props.imgIcon} alt={props.imgIcon} />
                </div>
            </div>
        </>
    );
};