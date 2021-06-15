var number= 0;

function addOne() {
    number++;
    renderApp();
    console.log('add one');
    
}
function minusdOne() {
    number--;
    renderApp();
    console.log('minus one');
    
}

function renderApp() {

    var template2 = (
        <div>
            <h1>Number: {number}</h1>
    
            <button id="btnPlusOne" className="btnRed" onClick={addOne}> +1</button>
            <button id="minusOne" className="btnBlue" onClick={minusdOne}> -1</button>
        </div>
    );

    ReactDOM.render(template2, root);
}

function tick(){
    var element = (
        <div>
            <h2>time is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    ReactDOM.render(element, root);
}
setInterval(tick, 1000) 

//renderApp();