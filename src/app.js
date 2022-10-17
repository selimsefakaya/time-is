let rootElement = document.getElementById("root");
let root = ReactDOM.createRoot(rootElement);

function timeIs() {
    let element = (
        <div>
            <h3>Time is:</h3>
            <p id="timer">{new Date().toLocaleTimeString()}</p>
        </div>
    );
    root.render(element);
}

setInterval(timeIs, 1000);
