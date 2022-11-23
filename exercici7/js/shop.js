// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    let i = 0;
    let found = 0;

    // while for exit the loop when it finds the product
    while(i<products.length && found==0){        
        if(id==products[i].id){
            found = i
            cartList.push(products[i]);
        }
        i++;
    }

    // Shows the number of products in the cart
    document.getElementById('count_product').innerHTML = cartList.length;

    console.log("Exercici 1: ",cartList);

    calculateTotal();
}

// Exercise 2
function cleanCart() {
    // remove all products from carList

    if(cartList.length>0){
        let clean = confirm("Do you want empty the shopping cart?");
        
        if(clean){
            cartList = [];
            document.getElementById('cart_list').innerHTML = "";
            document.getElementById('total_price').innerHTML = "0.00";
            document.getElementById('count_product').innerHTML = 0;
            console.log("Exercici 2: ", cartList);
        }
    }else{
        alert("Cart is empty");
    }
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    total = 0;

    for(let i=0; i<cartList.length; i++){
        total += cartList[i].price;
    }

    console.log("Exercici 3 - Total: ",total);    
}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    let idProd, nameProd, priceProd, typeProd;
    let isNew;
    cart = [];

    // read cartList array
    for(let i=0; i<cartList.length; i++){
        isNew = 0;
        
            //read cart array 
            for(let j=0; j<cart.length; j++){
                if(cartList[i].id==cart[j].id){
                    //adds +1 cart[i].quantity
                    cart[j].quantity++;
                    cart[j].subtotalWithDiscount = cart[j].price * cart[j].quantity;
                    isNew ++;
                }
            } 
            
            //if it's first element of the array or does not exist in cart
            if(!cart.length || isNew==0){                
                idProd = cartList[i].id;
                nameProd = cartList[i].name;
                priceProd = cartList[i].price;
                typeProd = cartList[i].type;
                subtotalWithDiscountProd = cartList[i].price
                
                //add new record to cart[i] with quantity=1
                const newProduct = {id:idProd,name:nameProd,price:priceProd,type:typeProd,quantity:1,subtotalWithDiscount:subtotalWithDiscountProd};

                cart.push(newProduct);
            }                  
    }
    
    console.log("Exercici 4: ",cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let subTotal = 0;

    //traverse the array cart
    for(let i=0; i<cart.length; i++){

        // DISCOUNT FOR PROMOTION
        if(cart[i].name == 'cooking oil' && cart[i].quantity>=3){
            cart[i].subtotalWithDiscount = cart[i].quantity * 10;
            subTotal += cart[i].subtotalWithDiscount;
        }

        if(cart[i].name == 'Instant cupcake mixture' && cart[i].quantity>=10){
            const discountProd = (cart[i].price * 2/3).toFixed(2);  
            cart[i].subtotalWithDiscount = cart[i].quantity * discountProd;
            subTotal += cart[i].subtotalWithDiscount;
        }
    }
    
    console.log("Exercici 5: ",cart);
    console.log("Subtotal with Discount: ", subTotal);
}


// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    subtotal = 0;
    let cadena = '';

    // Remove generateCart button and call functions from here
    generateCart();
    applyPromotionsCart();

    // Show the products from cart
    for(let i=0; i<cart.length; i++){
        cadena += '<tr>';
        cadena += '<th scope="row">' + cart[i].name + '</th>';
        cadena += '<td>$' + cart[i].price + '</td>';
        cadena += '<td>' + cart[i].quantity + '</td>';
        cadena += '<td>$' + cart[i].subtotalWithDiscount.toFixed(2) + '</td>';

        subtotal += cart[i].subtotalWithDiscount;
    }

    document.getElementById('cart_list').innerHTML = cadena;
    document.getElementById('total_price').innerHTML = subtotal.toFixed(2);    
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}