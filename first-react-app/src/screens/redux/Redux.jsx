import Container from "../../components/Redux/Container";
import Controls from "../../components/Redux/Controls";
import DisplayCounter from "../../components/Redux/DisplayCounter";
import Header from "../../components/Redux/Header";

const Redux = () => {
    return (
        <center className="px-4 py-5 my-5 text-center">
            <Container>
                <Header />
                <div className="col-lg-6 mx-auto">
                    <DisplayCounter />
                    <Controls />
                </div>
            </Container>
        </center>
    )
}

export default Redux; 