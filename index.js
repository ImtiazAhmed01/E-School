//card grab
const cards = document.querySelectorAll(".card");
const rightSide = document.querySelector(".main-cart");
// cards.forEach((singleCard) => {
//     console.log(singleCard[0].childNodes[3]);
// })


const cartState = {}


cards.forEach((singleCard, idx) => {
    const btn = singleCard.childNodes[3].childNodes[7]
    const name = singleCard.childNodes[3].childNodes[1].textContent
    const _price = singleCard.childNodes[3].childNodes[3].textContent
    const price = Number(_price.split(" ")[0]);
    const picture = singleCard.childNodes[1].src;


    btn.addEventListener('click', () => {
        console.log(`Clicked ${idx}`);
        if (name in cartState === false) {
            cartState[name] = {}
            cartState[name].price = price
            cartState[name].picture = picture
            cartState[name].quantity = 1
        }
        appendCartItems(cartState)

    })
    function appendCartItems(currentCartState) {
        rightSide.innerHTML = "";
        for (let name in currentCartState) {
            const img = currentCartState[name].picture
            const unit_price = currentCartState[name].price

            const cartItem = creatCartItem(img, name, unit_price)
            const total = cartTotal(unit_price, idx)
            rightSide.innerHTML += cartItem;
        }
    }
    function creatCartItem(img, title, unit_price) {
        const cartItem = `
        <div class="col-md-3 col-lg-3 col-sm-5 ps-5 main-cart">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${img}" class="img-fluid rounded-start" alt="">
                    </div>
                    <div  class="col-md-8 d-flex">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${unit_price}TK</p>
                        </div>
                        <div class="card-body">
                            <img src="images/icon/x.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     `
        return cartItem
    }
    function cartTotal(unit_price, idx) {
        const total = `                    
        <div class="border-top border-dark d-flex">
            <div class="ms-3">
                <h5>Sub-Total</h5>
                <h6>${idx} Items</h6>
            </div>
            <div class="ms-5 ps-5">
                <h3>${unit_price * idx}TK</h3>
                <button type="submit" class="btn btn-outline-success">Buy Course</button>
            </div>
        </div>`
        return total
    }
})