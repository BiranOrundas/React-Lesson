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
            <Header title= {app.title} description= {app.description} info={app.info}/>
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

console.log(ReactDOM);

class Header extends React.Component {
  
    render(){  

         console.log(this.props)

        return (
                <div>            
                      <h1> {this.props.title} </h1>
                      <div>{this.props.description}</div> 
                    
                      <div>{this.props.info}</div>
                                        
                 </div>
                 
           );

    }
}

class TodoList extends React.Component {
    constructor(props){
        super(props);

        this.clearItems = this.clearItems.bind(this);
    }



    clearItems(){
        console.log(this.props.items);
        console.log('clear items');
    }
    render (){
        return( 
            <div>
         <ul>
           {
               this.props.items.map((item,index) =>
                    <TodoItem key={index} item = {item} />
                )
           }

         </ul>
             <p> 
             <button onClick ={this.clearItems}> Listeyi temizle </button>
             </p>
          </div>
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
    onFormSubmit(e){
        e.preventDefault();

        const item =e.target.elements.txtItem.value.trim();
        if (item) {
            console.log(item);
            
        }
        else{

            console.log("bir bilgi girmediniz...");
        }
    }

    render(){
        return(
            <div>
                              
                <form onSubmit={this.onFormSubmit}> 
                 <p>  
                <input type="text" name="txtItem"/>
                </p>
                <button type="submit">Aktivite ekle</button>  
                </form>
            </div>
        )
    }
} 







ReactDOM.render(<TodoApp />, document.getElementById('root'));