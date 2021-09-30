import Axios from 'axios';
import { CART_ADD_ITEM } from 'cartConstants';
import { async } from 'regenerator-runtime';

export const addToCart = (productID, qty) => async(dispatch, getState) =>
{
    const {data} = await Axios.get(`/api/products/${productID}`);
    dispatch(
        {
            type: CART_ADD_ITEM,
            payload: 
            {
                title: data.title,
                image: data.image,
                price: data.price,
                product: data.id,
                quantity: data.qty,
                desc: data.description,
                cID: data.category_id
            },
        }
    );
};