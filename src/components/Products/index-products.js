import React from 'react'
import { ProductButton, ProductCard, ProductImg, ProductInfo, ProductPrice, ProductsContainer, ProductsHeading, ProductTitle, ProductWrapper } from './productsElements';


function Products({heading, data}) {
    return (
        <ProductsContainer id="products">
            <ProductsHeading>
                {heading}
            </ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton href='/contact'>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    );
                })}
            </ProductWrapper>
        </ProductsContainer>
    );
};

export default Products;
