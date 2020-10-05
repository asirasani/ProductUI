import React, { useEffect, useState } from 'react';
import CarouselModal from './components/CarouselModal';
import Product from './components/Product';

const PRODUCTS_API = 'https://api.npoint.io/de69d21a271c297aae62';

export default () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [carouselOpen, setCarouselOpen] = useState(false)
    useEffect(() => {
        let isAborted = false;
        const fetchData = async () => {
            const data = await (await fetch(PRODUCTS_API)).json();
            !isAborted && setProducts(data.groups);
        }
        fetchData();
        return () => {
            isAborted = true;
        }
    }, [])

    return <div className="row" data-testid="productList">
        <CarouselModal open={carouselOpen} product={selectedProduct} onClose={() => setCarouselOpen(false)} />
        {
            products.map(product => <Product key={product.id} id={product.id} name={product.name} image={product.hero.href} price={product.price?.selling || product.priceRange?.selling} onClick={() => {
                setCarouselOpen(true)
                setSelectedProduct(product)
            }} />)
        }
    </div>
}