import {getProducts} from "@/api/products";

export async function fetchProducts(productsPerPage: number, currentPage: number, withDiscount?: boolean ) {
    try {
        const offset = (currentPage - 1) * productsPerPage;
        const data = await getProducts(productsPerPage, offset, withDiscount);
        return data;
    } catch (error) {
        console.error(error);
    }
}
