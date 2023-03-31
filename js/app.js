let products = [
    {
        name: `Bella Velvet Sofa `,
        price: 999,
        description: `This luxurious sofa features a soft velvet upholstery in a rich shade of navy blue. The deep seat and plush cushions offer maximum comfort, while the elegant curved arms and solid wood legs add a touch of sophistication to any living room.`,
        id: 001,
        image_url: `/images/velvetsofa.jpg`
    },
    {
        name: `Oslo Queen Bed`,
        price: 1499,
        description: `Crafted from solid oak wood, this modern platform bed features a sleek and minimalistic design. The low profile frame and headboard give the bed a contemporary look, while the natural wood finish adds warmth and character to the bedroom.`,
        id: 002,
        image_url: `/images/oakbed.jpg`
    },
    {
        name: `Remy Accent Chair`,
        price: 399,
        description: `Add a pop of color to any space with this chic accent chair. The Remy chair features a bold geometric pattern in shades of yellow, grey, and white. The compact size and comfortable seat make it perfect for a reading nook, bedroom, or small living room.`,
        id: 003,
        image_url: `/images/accentchair.jpg`
    }
];

let product_section = document.querySelector(`#products`);

//Injecting the products into the page based on the data source
for(let i = 0; i < products.length; i++)
{
    product_section.insertAdjacentHTML(`beforeend`, 
    `<article class="product_card">
        <img class="product_image" src="${products[i][`image_url`]}" alt="Image of ${products[i][`name`]}">
        <h3 class="product_name">${products[i][`name`]}</h3>
        <p class="product_price">$ ${products[i][`price`]}</p>
        <p class="product_description">${products[i][`description`]}</p>
        <button class="cart_button"
        product_name="${products[i][`name`]}"
        product_price="${products[i][`price`]}"
        product_description="${products[i][`description`]}"
        product_image="${products[i][`image_url`]}"
        product_id="${products[i][`id`]}"
        >ADD TO CART</button>
    </article>`);
}

