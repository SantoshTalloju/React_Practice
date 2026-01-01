import { useSelector } from "react-redux";

const DisplayCounter = () => {
    // const counter = useSelector(state => state.counter);
    const counter = useSelector(state => state.counter.counterVal);

    return (
        <div>
            <p className="lead mb-4">Counter Current Value: {counter}</p>
        </div>
    )
}

export default DisplayCounter;