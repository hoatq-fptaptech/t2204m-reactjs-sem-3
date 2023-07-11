import api from "./api";

export const getProduct = async (limit)=> {
    const url = `products?limit=${limit}`;
    try {
        const rs = await api.get(url);
        return rs.data.products;
    }catch(error){
        return [];
    }
}