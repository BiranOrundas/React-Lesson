class Planet extends React.Component {
    render(){

        const app ={
            title : "Dünya",
            description : "Yuvarlak ve genel olarak mavi görünüme sahip",
            items : ['Hayvanlar','Bitkiler','İnsanlar','Mantarlar'],
            info : "Dünya nın sahip oldukları Şu şekildedir : ",

        };
            return (
                <div>
                        <ListResult title={app.title} description={app.description} info={app.info} />
                        <ListWiew items = {app.items}/>
                        <Action />
                        

                </div>

            );

    }

}

class ListResult extends React.Component {

   
    render(){
        console.log(this.props);

        return(
                <div>
                    <h1>{this.props.title}</h1>
                    <div>{this.props.description}</div>
                    
                        <div>{this.props.info}</div>
                    

                </div>
        
        );
    }
}



class ListItems extends React.Component{

    render(){
        return(
            <li>{this.props.item}</li>
        );
    }
}


class ListWiew extends React.Component{
    constructor(props){
        super(props);

        this.clearItems = this.clearItems.bind(this);
    }
    clearItems(){
        console.log(this.props.items);
        console.log('items cleared');

    }
         render(){

                return(

            <div>
                <ul>
                    {
                      this.props.items.map((item,index) =>
                      <ListItems key={index} item = {item} />)

                
                    }
                </ul>
                <p>
                    <button onClick ={this.clearItems}>Listeyi Temizle</button>
                </p>

            </div>
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
                console.log("Bilgi girmediniz !");
            }
        }


    render() {

        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <p>

                <input type="text" name="txtItem" />
                    </p>
                    <button type="submit"> Bilgi Ekle </button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<Planet />, document.getElementById('screen'));