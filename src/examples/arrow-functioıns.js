//ES5

var helloES5 = function () {
    console.log('hello from es5');
    
}

//function helloES5() {
 //   console.log('hello from es5');
//}

//ES6

let helloES6 = () => {
    console.log('hello From es6');
}

helloES5();
helloES6();


let mutliplyES5 = function (x,y) {
    return x * y ;
    
}

//let multiplyES6 = (x,y) => { return x*y };
let multiplyES6 =(x,y) => x*y;

console.log(mutliplyES5(8,4));
console.log(multiplyES6(7,6));

let getProductES5 = function(id,name) {
    return {
        id: id,
        name : name
    }
    
}
console.log(getProductES5(1,'Iphone X'));

let getProductES6 = (id,name) => ({

    id: id,
    name: name
});

console.log(getProductES6(2,'Iphone SE'));

const phones =[
    {name: 'Iphone 8', price: 4000},
    {name: 'Iphone X', price: 10000},
    {name: 'Iphone XR', price: 7000},
    {name: 'Iphone SE', price: 5000},
    {name: 'Iphone 7 Plus', price: 12000},
];

let priceES5 = phones.map(function(phone){
    return phone.price;
})
console.log(priceES5);

let priceES6 = phones.map(phone => phone.price);

console.log(priceES6);


let nameES6 = phones.map(phone => phone.name);

console.log(nameES6);

//Filtreleme

let filterES5 = phones.filter(function (phone) {
    return phone.price >= 7000;
    
}) 
console.log(filterES5);


let filterES6 = phones.filter(phone => phone.price >= 5000);

console.log(filterES6);
