//const Header() = function () {

//   return <h1>Hello React</h1>
    
//}

class Header extends React.Component {
    render(){
        return (<h1>Hello React </h1>);

    }
}



const template = < Header />


ReactDOM.render(< Header />, document.getElementById('root'));