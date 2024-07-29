//Write a function to display the product information on the webpage dynamically.




function display(){

    let products = [
        { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
        { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
        { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
    ];

    for (let p of products){
        console.log(p);
    }
}

display();
