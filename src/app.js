//const Header() = function () {

//   return <h1>Hello React</h1>
    
//}


class TodoApp extends React.Component{
    render(){
        const app = {
                 title :"Todo Application!",
                 description:"lorem ipsum dolor 3 4 5",
                    items : ['item1','item2','item3', 'item4'],
                    

            };
          

        return (

            <div>
            <Header title= {app.title} description= {app.description} />
             <TodoList items= {app.items} />
             <Action />
        </div>
    );
        
    }
}

// const Header = function (props) {
//     console.log(props);
//     return(
//         <div>
//             <h1>{props.title}</h1>
//             <div>{props.description}</div>
//         </div>
//     )
    
// }

console.log(React.Component);

class Header extends React.Component {
  
    render(){  

         console.log(this.props)

        return (
                <div>            
                      <h1> {this.props.title} </h1>
                      <div>{this.props.description}</div> 
                             
                 </div>
           );

    }
}

class TodoList extends React.Component {
    render (){
        return( 
         <ul>
           {
               this.props.items.map((item,index) =>
                    <TodoItem key={index} item = {item} />
                )
           }

         </ul>
        );
    }
}
class TodoItem extends React.Component{
    render(){
        return (
            <li>{this.props.item} </li>
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







ReactDOM.render(<TodoApp />, document.getElementById('root'));