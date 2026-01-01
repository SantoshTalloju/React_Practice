import { useDispatch } from "react-redux";
import "../../screens/redux/Redux.css";
import { useRef } from "react";
import { counterActions } from "../../store/counter";

const Controls = () => {
    const dispatch = useDispatch();
    const inputElement = useRef('');

    const handleIncrement = () => {
         dispatch(counterActions.increment());
        // dispatch({
        //     type: 'INCREMENT'
        // });
    }

    const handleDecrement = () => {
         dispatch(counterActions.decrement());
        // dispatch({
        //     type: 'DECREMENT'
        // });
    }

    const handleAdd = () => {
        dispatch(counterActions.add(Number(inputElement.current.value)));
        // dispatch({
        //     type: 'ADD',
        //     payload: Number(inputElement.current.value)
        // });
        inputElement.current.value = '';
    }

    const handleSubtract = () => {
        dispatch(counterActions.subtract(Number(inputElement.current.value)));
        // dispatch({
        //     type: 'SUBTRACT',
        //     payload: Number(inputElement.current.value)
        // });
        inputElement.current.value = '';
    }

    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
                <button type="button" className="btn btn-secondary" onClick={handleDecrement}>-1</button>
            </div>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
                <input ref={inputElement} type="text" placeholder="Enter number" className="number-input"/>
                <button type="button" className="btn btn-info" onClick={handleAdd}>Add</button>

                <button type="button" className="btn btn-danger" onClick={handleSubtract}>Subtract</button>
            </div>
        </>

    )
}

export default Controls;