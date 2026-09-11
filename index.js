/* Task1 let api = "https://fakestoreapi.com/products";

fetch(api)
.then(response => response.json())
.then(products => {

    console.log("===== PRODUCTS =====");

    products.forEach(product => {
        console.log(product.title);
        console.log(product.price);
        console.log(product.category);
    });

    
    let names = products.map(product => {
        return {
            title: product.title,
            price: product.price
        };
    });

    console.log("Title and Price:");
    console.log(names);

    let expensive = products.filter(product => {
        return product.price > 100;
    });

    console.log("Products above $100:");
    console.log(expensive);


    let electronics = products.find(product => {
        return product.category === "electronics";
    });

    console.log("First Electronics Product:");
    console.log(electronics);

    let total = products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    console.log("Total Price:", total);

    
    let sorted = products.sort((a, b) => {
        return b.price - a.price;
    });

    console.log("Highest to Lowest:");
    console.log(sorted);

})
.catch(error => {
    console.log("Error:", error);
})
.finally(() => {
    console.log("Completed");
});

 Task2 let api = "https://fakestoreapi.com/products";

fetch(api)
.then(response => response.json())
.then(products => {

    console.log("===== PRODUCT DASHBOARD =====");

    console.log("Total Products:", products.length);

    // Electronics
    let electronics = products.filter(product => {
        return product.category === "electronics";
    });

    console.log("Electronics:", electronics.length);

    // Jewelery
    let jewelery = products.filter(product => {
        return product.category === "jewelery";
    });

    console.log("Jewelery:", jewelery.length);

    // Men's Clothing
    let men = products.filter(product => {
        return product.category === "men's clothing";
    });

    console.log("Men's Clothing:", men.length);

    // Women's Clothing
    let women = products.filter(product => {
        return product.category === "women's clothing";
    });

    console.log("Women's Clothing:", women.length);

    // Total price
    let total = products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    console.log("Total Price:", total);

    // Average
    let average = total / products.length;

    console.log("Average Price:", average);

})
.catch(error => {
    console.log("Error:", error);
});

Task3 let usersApi = "https://jsonplaceholder.typicode.com/users";

fetch(usersApi)
.then(response => response.json())
.then(users => {

    console.log("===== USER NAMES =====");

    users.forEach(user => {
        console.log(user.name);
    });

    console.log("===== NAME AND EMAIL =====");

    users.forEach(user => {
        console.log(user.name, user.email);
    });

    // Find ID 5
    let user5 = users.find(user => {
        return user.id === 5;
    });

    console.log("User ID 5:");
    console.log(user5);

    // Filter city
    let cityUsers = users.filter(user => {
        return user.address.city === "Gwenborough";
    });

    console.log("Users from Gwenborough:");
    console.log(cityUsers);

})
.catch(error => {
    console.log("Error:", error);
});


 TasK4 let api = "https://fakestoreapi.com/products";

fetch(api)
.then(response => response.json())
.then(products => {

    let category = prompt("Enter category:");

    let maxPrice = Number(
        prompt("Enter maximum price:")
    );

    let result = products.filter(product => {

        return product.category === category &&
               product.price <= maxPrice;

    });

    console.log("===== RESULTS =====");

    result.forEach(product => {

        console.log(product.title);
        console.log("Price:", product.price);
        console.log("Category:", product.category);

    });

})
.catch(error => {
    console.log("Error:", error);
});

 Task5 let api = "https://fakestoreapi.com/products";

fetch(api)
.then(response => response.json())
.then(products => {

    console.log("===== PRODUCTS =====");

    products.forEach(product => {

        console.log(
            product.id,
            product.title,
            product.price
        );

    });

    let ids = prompt(
        "Enter product IDs: 1,2,3"
    );

    let selectedIds = ids
        .split(",")
        .map(id => Number(id));

    let cart = products.filter(product => {

        return selectedIds.includes(product.id);

    });

    console.log("===== CART =====");

    cart.forEach(product => {

        console.log(product.title);
        console.log("Price:", product.price);

    });

    // Total
    let total = cart.reduce((sum, product) => {

        return sum + product.price;

    }, 0);

    console.log("Total:", total);

    // Discount
    let discount = 0;

    if (total > 200) {

        discount = 20;

    } else if (total > 100) {

        discount = 10;

    }

    let discountAmount =
        total * discount / 100;

    let finalAmount =
        total - discountAmount;

    console.log("Discount:", discount + "%");

    console.log("Final Amount:", finalAmount);

})
.catch(error => {
    console.log("Error:", error);
});

Task6 let api = "https://fakestoreapi.com/products";

fetch(api)
.then(response => response.json())
.then(products => {

    console.log("===== PRODUCT REPORT =====");

    // Total products
    console.log("Total Products:", products.length);


    // forEach
    console.log("===== PRODUCTS =====");

    products.forEach(product => {

        console.log(product.title);
        console.log(product.price);

    });


    // map
    let names = products.map(product => {

        return product.title;

    });

    console.log("===== PRODUCT NAMES =====");

    console.log(names);


    // filter
    let expensive = products.filter(product => {

        return product.price > 100;

    });

    console.log("===== ABOVE $100 =====");

    console.log(expensive);


    // find
    let electronic = products.find(product => {

        return product.category === "electronics";

    });

    console.log("===== ELECTRONICS =====");

    console.log(electronic);


    // reduce
    let total = products.reduce((sum, product) => {

        return sum + product.price;

    }, 0);

    console.log("Total Value:", total);


    // some
    let above500 = products.some(product => {

        return product.price > 500;

    });

    console.log("Any Above $500:", above500);


    // every
    let above1 = products.every(product => {

        return product.price > 1;

    });

    console.log("All Above $1:", above1);


    // sort
    let sorted = products.sort((a, b) => {

        return b.price - a.price;

    });

    console.log("===== HIGHEST TO LOWEST =====");

    sorted.forEach(product => {

        console.log(
            product.title,
            product.price
        );

    });

})
.catch(error => {

    console.log("Error:", error);

})
.finally(() => {

    console.log("===== COMPLETED =====");

});*/