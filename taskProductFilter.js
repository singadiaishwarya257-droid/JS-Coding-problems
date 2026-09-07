const products=[
    {name:"Laptop",price:50000},
    {name:"phone",price:20000},
    {name:"Headphone",price:3000},
    {name:"keyboard",price:1500}
];
const result= products.filter(function(product){
    return product.price<5000;
});
console.log(result);

