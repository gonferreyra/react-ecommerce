import * as actionTypes from "./shopping-types"

const INITIAL_STATE = {
    products: [
        {
            id: '1',
            name: 'Air Jordan XXXVI',
            category: 'Jordan',
            price: 175,
            stock: 2,
            url: 'air-jordan-xxxvi-low',
            info: 'Lace up in the energy that sparked a basketball revolution. One of the lightest Air Jordan game shoes to date, the AJ XXXVI features a minimal but durable upper with reinforcing overlay. It also comes equipped with Zoom Air cushioning for added responsiveness. Step on to the court with the confidence that whatever you do—it"s light work.'
        },
        {
            id: '2',
            name: 'Varsity Red',
            category: 'Jordan',
            price: 170,
            stock: 2,
            url: 'VarsityRed',
            info: "Get ready to make the team with this varsity-inspired AJ1. Classic color blocking and fuzzy Chenille fabric on the Swoosh give letterman jacket vibes, while a ribbed tongue and plush lining elevate the look and feel. Your team spirit gets another boost from the 'NIKE AIR' hangtag patch, earning you a coveted letter in game-winning style."
        },
        {
            id: '3',
            name: 'Air Jordan 1 Low FlyEase',
            category: 'Jordan',
            price: 130,
            stock: 2,
            url: 'air-jordan-1-low-flyease',
            info: "Lock in your style with this AJ1. We kept everything you love about the classic design—premium leather, Air cushioning, iconic Wings logo—while adding the Nike FlyEase closure system to make on and off a breeze. Getting out the door is now quicker than ever: just strap and zip."
        },
    ],
    cart: [],
    currentItem: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // get the items data from the products
            // return the first element in the array that have the same id
            const item = state.products.find(product => product.id === action.payload.id)
            // check if the item is in cart
            const inCart = state.cart.find((item) =>
                item.item.id === action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart
                    // if it's in the cart: map the cart and bring the item to add 1 to it's quantity
                    ? state.cart.map(item =>
                        item.item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            // if it's not in the cart, bring the item
                            : item
                    )
                    // if it's not, create an array with the item and set it's quantity to 1
                    : [...state.cart, { item, quantity: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            // return every item that is not the one we clicked
            return {
                ...state,
                cart: state.cart.filter(item => item.item.id !== action.payload.id),
            }
        case actionTypes.ADJUST_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
                ),
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        default:
            return state
    }
};

export default shopReducer