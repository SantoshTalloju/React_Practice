import styles from './Display.module.css';

const Display = ({ displayValue }) => {
    return (
        <div>
            <input type="text" className={styles.display} readOnly value={displayValue} />
        </div>
    )
}

export default Display;