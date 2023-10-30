import axios from 'axios'
import {Cookies} from "react-cookie-consent";

const token = Cookies.get('token');

let headers = {
    
};

if(!!token) {
    headers = {
        ...headers,
        'Authorization': `Bearer ${token}`,
    }
};

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://21-sport.ru/api/',
    headers
    // headers: {
        // 'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${token}`,
        // 'Access-Control-Allow-Credentials': true,
        // 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    // }
})

export const api = {
    getMe() {
        return instance.get(`users/me`)
            .then(responsive => responsive.data)
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 401) {
                        return console.log('Не авторизованы')
                    }
                } else if (err.request) {

                } else {

                }
            })
    },
    login({email, password}) {
        return instance.post(`auth/signin`, {email, password})
            .then(responsive => responsive.data)
            .catch(err => err.response.data)
    },
    signup(data) {
        return instance.post(`auth/signup`, data)
            .then(responsive => responsive.data)
            .catch(err => err.response.data)
    },

    //add item

    addItem(data) {
        return instance.post(`items`, data)
            .then(responsive => responsive.data)
            .catch(err => err.response.data)
    },
    updateItem(data, id) {
        return instance.patch(`items/${id}`, data)
            .then(responsive => responsive.data)
            .catch(err => err.response.data)
    },

    getOrders() {
        return instance.get(`order/all`)
            .then(responsive => responsive.data)
    },
    getUserOrders() {
        return instance.get(`order`)
            .then(responsive => responsive.data)
    },
    orderStatusUpdate(id, status) {
        return instance.patch(`order/${id}`, {updatedStatus: status})
            .then(responsive => responsive.data)
    },



    getItems(sex) {
        return instance.get(`items?sex=${sex ? sex : ''}`)
            .then(responsive => responsive.data)
    },
    getFullItems(sex) {
        return instance.get(`items/full?sex=${sex ? sex : ''}`)
            .then(responsive => responsive.data)
    },
    getNextItemsPage(sex, page) {
        return instance.get(`items?sex=${sex ? sex : ''}&page=${page}`)
            .then(responsive => responsive.data)
    },
    getItemsCount() {
        return instance.get('items/count')
            .then(responsive => responsive.data)
    },
    getItem(id) {
        return instance.get(`items/${id}`)
            .then(responsive => responsive.data)
    },
    deleteSizes(id) {
        return instance.patch(`items/${id}`, {sizes: []})
            .then(responsive => responsive.data)
    },
    deleteItem(id) {
        return instance.delete(`items/${id}`)
            .then(responsive => responsive.data)
    },


    //BASKET
    getBasketItems() {
        return instance.get('items/basket')
            .then(responsive => responsive.data)
            .catch(err => err.response.data)
    },
    setBasketItems(id, values) {
        return instance.post('items/basket', {id: +id, sizes: [...values.checked]})
            .then(responsive => responsive.data)
    },
    deleteItemFromBasket(id) {
        return instance.delete(`items/basket`, {data: {id: id}})
            .then(responsive => responsive.data)
    },
    resetItemsFromBasket() {
        return instance.delete(`items/basket`)
            .then(responsive => responsive.data)
    },


    //FAVORITES
    getFavoritesItems() {
        return instance.get('items/favourites')
            .then(responsive => responsive.data)
    },
    setFavoritesItems(id) {
        return instance.post('items/favourites', {id: +id})
            .then(responsive => responsive.data)
    },
    deleteItemsFromFavorites(id) {
        return instance.delete(`items/favourites`, {data: {id: id}})
            .then(responsive => responsive.data)
    },


    //Cities

    getCities() {
        return instance.get(`order/cities`)
            .then(responsive => responsive.data)
    },


    //ORDER
    setOrder(data) {
        const res = data
        return instance.post(`order`, {...data})
            .then(responsive => responsive.data)
    }
}