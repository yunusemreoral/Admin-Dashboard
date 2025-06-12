import {GetOrdersResponse,GetProductsResponse, Product,GetUsersResponse,GetProductResponse,GetUserResponse} from "@/types";
const API_URL = "http://localhost:3001";

// bütün siparişlerini getir
const getOrders = async (): GetOrdersResponse => {
    const response = await fetch(`${API_URL}/orders`);

    return response.json();
};

const getProducts = async (): GetProductsResponse => {
    const response = await fetch(`${API_URL}/products`);

    return response.json();
};

const getProduct = async (productId: string): GetProductResponse => {
    const response = await fetch(`${API_URL}/products/${productId}`);

    return response.json();
};

const getUsers = async (): GetUsersResponse => {
    const response = await fetch(`${API_URL}/users`);

    return response.json();
};

const deleteProduct = async (productId: string) => {
    const response = await fetch(`${API_URL}/products/${productId}`, {
        method: "DELETE",
    });
    
    return response.json();
};

const createProduct = async (product: Omit<Product,"id">) => {
    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type" : "application/json",
        },
    });

    return response.json();
};
const updateProduct = async (id: string,product: Omit<Product,"id">) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: "PUT",
        body: JSON.stringify(product),
    });

    return response.json();
};

const banUser = async (id: string) => {
    const response = await fetch (`${API_URL}/users/${id}`, {
        method: "delete",
    });

    return response.json();
};

const getUser = async (id:string): GetUserResponse => {
    const response = await fetch(`${API_URL}/users/${id}`);

    return response.json();
};

export {getOrders,getProducts,deleteProduct,getProduct,createProduct,updateProduct,getUsers,banUser,getUser}