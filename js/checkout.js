function remove_item(event)
{
    event[`target`][`parentElement`].remove();
    
    for(let i = 0; i < cart.length; i++)
    {
        if(event[`target`].getAttribute(`product_id`) === cart[i][`id`])
        {
            cart.splice(i, 1);
            cart_json = JSON.stringify(cart);
            Cookies.set(`cart_content`, cart_json);
            break;
        }
    }
}

function empty_cart(event)
{
    product_display.remove();
    Cookies.remove(`cart_content`);
}


let cart_json = Cookies.get(`cart_content`);
let cart = 0;
let product_display = document.querySelector(`#product_selection`);

if(cart_json !== undefined)
{
    cart = JSON.parse(cart_json);

    for(let i = 0; i < cart.length; i++)
    {
        product_display.insertAdjacentHTML(`beforeend`,
        `<article class="product_card">
            <img class="product_image" src="${cart[i][`image_url`]}" alt="Image of ${cart[i][`name`]}">
            <h3 class="product_name">${cart[i][`name`]}</h3>
            <p class="product_price">$ ${cart[i][`price`]}</p>
            <p class="product_description">${cart[i][`description`]}</p>
            <button product_id="${cart[i][`id`]}" class="delete_button">REMOVE</button>
        </article>`);
        
    }
}
else
{
    product_display.insertAdjacentHTML(`beforebegin`, `<h3 style="justify-self: center;">You have no products in your cart</h3>`)
}

let empty_button = document.querySelector(`#empty_button`);
empty_button.addEventListener(`click`, empty_cart);

let delete_buttons = document.querySelectorAll(`.delete_button`)
{
    for(let i = 0; i < delete_buttons.length; i++)
    {
        delete_buttons[i].addEventListener(`click`, remove_item);
    }
}

