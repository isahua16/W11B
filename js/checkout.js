let cart_json = Cookies.get(`cart_content`);
let cart = [];
let product_display = document.querySelector(`#product_selection`);

if(cart_json !== undefined)
{
    cart = JSON.parse(cart_json);

    for(let i = 0; i < cart.length; i++)
    {
        product_display.insertAdjacentHTML(`beforebegin`,
        `<article class="product_card">
            <img class="product_image" src="${cart[i][`image_url`]}" alt="Image of ${cart[i][`name`]}">
            <h3 class="product_name">${cart[i][`name`]}</h3>
            <p class="product_price">$ ${cart[i][`price`]}</p>
            <p class="product_description">${cart[i][`description`]}</p>
            <button class="delete_button">REMOVE</button>
        </article>`);
    }

}
else
{
    product_display.insertAdjacentHTML(`afterbegin`, `<h3>You have no products in your cart</h3>`)
}

