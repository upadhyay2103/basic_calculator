import styles from "./Display.module.css";

function Display({data})
{
    return <>
    <input type="text" className={styles.display} value={data} readOnly/>
    </>
}

export default Display;