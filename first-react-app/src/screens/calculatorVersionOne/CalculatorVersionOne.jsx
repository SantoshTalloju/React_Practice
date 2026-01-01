import { useState } from 'react';
import ButtonsContainer from '../../components/CalculatorOne/ButtonsContainer.jsx';
import Display from '../../components/CalculatorOne/Display.jsx';
import styles from './CalculatorVersionOne.module.css';

const CalculatorVersionOne = () => {
    const [calVal, setCalVal] = useState("");

    const handleButtonClick = (buttonText) => {
        // Logic to handle button clicks and update calVal
        console.log("Button clicked:", buttonText);
        if (buttonText === 'C') {
            setCalVal("");
            return;
        } else if (buttonText === '=') {
            // eslint-disable-next-line react-hooks/unsupported-syntax
            const result = eval(calVal);
            setCalVal(result.toString());
        } else {
            // const newDisplayValue = calVal + buttonText;
            setCalVal((prevVal) => prevVal + buttonText);
        }
    }

    return (
        <div className={styles.calculator}>
            <Display displayValue={calVal} />
            <ButtonsContainer onButtonClick={handleButtonClick} />
        </div>
    );
}

export default CalculatorVersionOne;