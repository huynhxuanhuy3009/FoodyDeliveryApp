import *as actionType from '../action/actionType'

const initialState = {   //initalState giá trị khởi tạo ban đầu
    cartAr: [],
    totalprice: 0,   
};

//hàm cartReducer sẽ nhận vào 2 tham số để xử lý , 
//state = initalState : là giá trị khởi tọa ban đầu,
//action :hành động sẽ thực thi với giá trị đó 
const cartReducer = (state = initialState, action) => {     
    switch (action.type) {
        case actionType.BUY_PRODUCT:  
            console.log("product.id", action.payload.id)
        
        case actionType.INCREASE_PRODUCT: 
            let newproc = state.cartAr;
            const objIndext = newproc.findIndex((obj) => obj.id == action.payload.id)
            newproc[objIndext] = {
                ...newproc[objIndext],
                quantity: newproc[objIndext].quantity + 1,
            }
            let pricet = 0;
            newproc.map((pr) => (pricet = pricet + pr.prices * pr.quantity))
            return {cartAr:[...newproc], totalprice: pricet}

        case actionType.DECREASE_PRODUCT: 
            let newproc = state.cartAr;
            const objIndext = newproc.findIndex((obj) => (obj.id == action.payload.id))
            if(newproc[objIndext].quantity > 1){
                newproc[objIndext] = {
                    ...newproc[objIndext],
                    quantity: newproc[objIndext].quantity - 1,
                };
            }   
            pricet = 0;
            newproc.map((pr) => (pricet = pricet + pr.prices * pr.quantity))
            return {cartAr:[...newproc], totalprice: pricet}

        case actionType.DELETE_PRODUCT:
            let newcart = state.cartAr;
            const objIndext = newcart.findIndex((obj)=> (obj.id === action.payload.id))
            let newtotal;
            newtotal = state.totalprice - newcart[objIndext].prices * newcart[objIndext].quantity
            newcart.splice(objIndext, 1);
            return {cartAr: [...newcart], totalprice: newtotal};

    }
};

export default cartReducer;


