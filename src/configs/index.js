let cart = [];

function getCart() {
    return cart;
}

function addtoCart(item) {
    cart.push(item);
}

function setCart(carts) {
    cart = carts;
}

function checkInCart(food) {
    if (!food) {
        return null;
    }
    for (let item of this.state.cart) {
        if (item._id.$oid === food._id.$oid) {
            return item;
        }
    }
    return null;
}

export {setCart, getCart}