//This function first deletes the parent html element of the button that was clicked and its contents. This will remove the product from the page
function remove_item(event)
{
    event[`target`][`parentElement`].remove();
    //Look at all the elements in the cart array, and find a match based on the button's id attribute and the id key of each product object. 
    
    for(let i = 0; i < cart.length; i++)
    {
        if(event[`target`].getAttribute(`product_id`) === cart[i][`id`])
        {
            //Remove that element from the array.
            cart.splice(i, 1);
            //If the array is empty and returns a length of zero, remove that cookie.
            if(cart.length === 0)
            {
                Cookies.remove(`cart_content`);
            }
            //If the cart array still has elements, save them inside a cookie.
            else
            {
                cart_json = JSON.stringify(cart);
                Cookies.set(`cart_content`, cart_json);
                break;
            }
        }
    }
    

}

//Remove the contents of the product_display html element that contains all the articles in the cart, and remove the cookie.
function empty_cart(event)
{
    product_display.remove();
    Cookies.remove(`cart_content`);
}

//Assign the contents of the Cookie regardless of if it exists of not
let cart_json = Cookies.get(`cart_content`);
//Declare an empty cart array
let cart = [];
let product_display = document.querySelector(`#product_selection`);

//Again, if the cookie contents is not undefined and has contents, put those elements inside cart as an array of objects.
if(cart_json !== undefined)
{
   cart = JSON.parse(cart_json);

    //For every element in the cart array, insert the html of the selected products.
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
    //If the cart is empty, insert a message that says that the cart is empty.
    product_display.insertAdjacentHTML(`beforebegin`, `<h3 style="justify-self: center;">You have no products in your cart</h3>`)
}

//Add an event listener to the delete all button
let empty_button = document.querySelector(`#empty_button`);
empty_button.addEventListener(`click`, empty_cart);

//Add event listeners to all the remove single element buttons.
let delete_buttons = document.querySelectorAll(`.delete_button`)
{
    for(let i = 0; i < delete_buttons.length; i++)
    {
        delete_buttons[i].addEventListener(`click`, remove_item);
    }
}

