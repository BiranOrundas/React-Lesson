//const Header() = function () {

//   return <h1>Hello React</h1>
    
//}


class TodoApp extends React.Component{
    render(){
        return (
            <div>
            <Header />
             <Todo />
             <Action />
        </div>
    );


        
    }
}


class Header extends React.Component {
    render(){
        return (
                <div>
            
                      <h1>Todo Application </h1>
                      <div>Lorem, ipsum dolor.</div>
        
                 </div>

                
         );

    }
}

class Todo extends React.Component {
    render (){
        return( 
         <ul>
            <li>İtem1</li>
            <li>İtem2</li>
            <li>İtem3</li>

         </ul>
        );
    }
}

class Action extends React.Component {
    render(){
        return(
            <div>
                <p>
                <button> Clear Item </button>
                </p>
                <p>  </p>
                <form >
                <input type="text" name="txtItem"/>
                <button type="submit">Add İtem</button>
                </form>
            </div>
        )
    }
}







ReactDOM.render(<TodoApp / >, document.getElementById('root'));