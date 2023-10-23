
function VariablesAndConstants() {
    var functionScoper = 2;
    let blockScoper = 5;
    const constant1 = functionScoper - blockScoper;

    return(
        <div>
            <h1>Variables and Constants</h1>
            functionScoper: {functionScoper} <br />
            blockScoper: {blockScoper} <br />
            constant1: {constant1} <br />
        </div>
    )

}

export default VariablesAndConstants;