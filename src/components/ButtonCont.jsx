import styles from "./ButtonCont.module.css"

function ButtonCont({handleClick}) {
const butname=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

    return <>
        <div className={styles.buttonsCont}>
            {butname.map(item=><button className={styles.batan} onClick={()=>{handleClick(item)}}>{item}</button>)}
        </div>
    </>
}

export default ButtonCont;