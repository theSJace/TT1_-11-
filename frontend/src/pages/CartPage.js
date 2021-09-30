import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../components/cart/cartActions';
import '../components/cart/CartPage.module.css';
import MessageBox from '../components/cart/messageBox';

export default function CartScreen(props)
{
    const productID = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const dispatch = useDispatch();
    useEffect(() => 
    {
        if(productID)
        {
            dispatch(addToCart(productID, qty));
        }
    }, [dispatch, productID, qty]);

    const removeFromCartHandler = (id) =>
    {
    };

    const checkOutHandler = () => 
    {
        props.history.push('/signin?redirect=shipping');
    };

    return
    (
        <div className = "rowTop">
            <div className = "col-2">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? <MessageBox>
                    Cart is Empty. <Link to = "/">Start Shopping</Link>
                    </MessageBox>
                    :
                    (
                        <ul>
                            {
                                cartItems.map((item) => (
                                    <li key = {item.product}>
                                        <div className = "row">
                                            <div>
                                                <img 
                                                src = {item.image} 
                                                alt = {item.title} 
                                                className = "small">
                                                </img>
                                            </div>
                                        </div>
                                        <div className = "min-30">
                                            <Link to = {`/product/${item.product}`}>
                                                {item.title}
                                            </Link>
                                        </div>
                                        <div>
                                            <select 
                                            value = {item.qty}
                                            onChange = {
                                                (e) => dispatch(
                                                    addToCart(item.product, Number(e.target.value))
                                                    )
                                            }>
                                                {[...Array(item.countInStock).keys().map((x) => (
                                                    <option key = {x+1} value = {x+1}>
                                                        {x + 1}
                                                    </option>
                                                ))]}
                                            </select>
                                            <div>${item.price}</div>
                                            <div>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFromCartHandler(item.product)}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    )
                    }
            </div>
            <div className = "col-1">
                <div className = "cart cart-body">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : 
                                ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                            </h2>
                        </li>
                        <li>
                            <button type = "button" onClick={checkOutHandler} className ="primary block" disabled ={cartItems.length === 0}>
                                Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}