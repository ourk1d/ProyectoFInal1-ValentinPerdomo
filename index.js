let products = [
    {id: 1, name: "pantalon", condition: "bueno", size:"L" , price:900, category: "niño"},
    {id: 2, name: "camisa", condition: "bueno", size:"M" , price: 800, category: "hombre"},
    {id: 3, name: "remera", condition: "muy bueno", size: "XL" , price: 700, category: "hombre" },
    {id: 4, name: "medias" , condition: "muy bueno", size: "S" , price: 600, category: "mujer"},
    {id: 5, name: "camisa algodon", condition: "nuevo", size: "XL" , price: 1200, category: "mujer"},
    {id: 6, name: "camisa paño", condition: "bueno", size:"XL" , price: 1200, category: "niño"},
    {id: 7, name: "short", condition: "nuevo", size:"XL" , price: 300, category: "niño"},
    {id: 8, name: "jean", condition: "nuevo", size:"XL" , price: 600, category: "hombre"},
    {id: 9, name: "pantalon", condition: "bueno", size:"L" , price:900, category: "mujer"},
    {id: 10, name: "camisa", condition: "bueno", size:"M" , price: 800, category: "niño"},
    {id: 11, name: "remera", condition: "muy bueno", size: "XL" , price: 700, category: "mujer" },
    {id: 12, name: "medias" , condition: "muy bueno", size: "S" , price: 600, category: "hombre"},
    {id: 13, name: "camisa algodon", condition: "nuevo", size: "XL" , price: 1200, category: "mujer"},
    {id: 14, name: "camisa paño", condition: "bueno", size:"XL" , price: 1200, category: "hombre"},
    {id: 15, name: "short", condition: "nuevo", size:"XL" , price: 300, category: "hombre"},
    {id: 16, name: "jean", condition: "nuevo", size:"XL" , price: 600, category: "mujer"},
]



/*
//Ordenar por categorias

let porCategoria = products.filter((product) => product.category === 'hombre') //en 'hombre' cambiar segun categoria (hombre,mujer,niño)

console.log(porCategoria);

// Ordenar por precio
// Ordenar de manera ascendente

products.sort((a, b) => a.price - b.price);
console.log(products)


// Ordenar de manera descendente
products.sort((a, b) => b.price - a.price)
console.log(products)
*/
class Item {
    constructor(name, condition, size, category, price){
        this.name = name
        this.condition = condition
        this.size = size
        this.price = price
        this.category = category
    }
}

let carrito = []

function agregarItemsCarrito(){
    let itemCarrito = parseInt (prompt("Ingrese la id del item a agregar al carrito"));
    let nuevoItem = products.find (item => item.id === itemCarrito);
    return nuevoItem;
}

const item = agregarItemsCarrito();
carrito.push(item);


let option = confirm("Desea agregar productos al carrito?");
while (option) {
	carrito.push(agregarItemsCarrito())
    option = confirm("Desea agregar productos al carrito?")
}


function total(){
    let total = carrito.reduce((acumulador, item) => acumulador + item.price, 0);
    return total;
}


total()
console.log(carrito);
console.log(total());





