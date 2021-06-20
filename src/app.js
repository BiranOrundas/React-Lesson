//const Header() = function () {

//   return <h1>Hello React</h1>
    
//}


class TodoApp extends React.Component{
    render(){
        const app = {
                 title :"Liste Aplikasyonu!",
                 description:"Ürünlerin seçimlerini boşluk kısmından ekleyebilirsiniz",
                    items : ['Kitap Saati','Okul dersleri','Bireysel Dersler', 'Günlük Hobiler'],
                    info : "Tüm Hakları Saklıdır"

            };
          

        return (

            <div>
            <Header title= {app.title} description= {app.description} />
             <TodoList items= {app.items} />
             <Action />
             <Biran />
             
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

console.log(ReactDOM);

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
                              
                <form > 
                 <p>  
                <input type="text" name="txtItem"/>
                </p>
                <button type="submit">Aktivite ekle</button>  
                <button> Listeyi temizle </button>
                </form>
            </div>
        )
    }
} 


class Biran extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    <li>Biran</li>
                    <li>Orundaş</li>
                    <li>birkaç</li>
                    <li>şey daha</li>
                </ul> 
                <form>
                 <p>
                 <input type="text" name="txtItem"/>
                </p>
                <button type="submit">Google</button>
              </form>
               
            </div>
        )
    }
}




ReactDOM.render(<TodoApp />, document.getElementById('root'));
