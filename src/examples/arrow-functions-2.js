const user = {
    name: 'Biran Orundaş',
    email:'biranorundas17@gmail.com',
    city: 'Bursa',
    roles: ['admin ', 'customer' , 'saler'],
    getRoles: function () {
     
        this.roles.forEach((role)=>{
            console.log(role);
            console.log(this.name);
            console.log(this.email);
        })
        
    }
}

user.getRoles();