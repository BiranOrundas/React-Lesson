

const root = document.getElementById('root');


const app = {

title: "Todo Application",
description: "Çok İyi Bir Ürün.",
items: ['item1','item2']

}

const onFormSubmit = () => {

    event.preventDefault();
 
    let item = event.target.elements.txtItem.value

    

  if (item) {
      app.items.push(item);
      event.target.elements.txtItem.value='';
     
      render();
      
      console.log(item);
  }
      console.log('form submitted');

}

const clearItems = () => {
    app.items = [];
    render();
}
const render = () => {
    
let template = (
    <div>

    <h1 >{app.title}</h1>
<div>{app.description}</div>
         
{<ul>
{

app.items.map((item,index) =>{
return <li key={index}>{item}</li>
})
}
</ul>

}
<p>
<button onClick={clearItems}> Clear Item </button>
</p>
<p> {app.items.length} </p>
<form onSubmit={onFormSubmit}>
<input type="text" name="txtItem"/>
<button type="submit">Add İtem</button>
</form>
</div> 

);

ReactDOM.render(template, root);

    
}


render();




