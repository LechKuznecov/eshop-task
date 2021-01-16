import React, { useContext } from "react";
import { Cart, Section, ProductBox, ProductInCart } from "../../components";
import productList from "../../utils/products";
import * as S from "./Home.style";
import { CartContext } from "../../contexts/cart.context";

function Home() {
  const { products, increase, decrease } = useContext(CartContext);

  function renderProduct(id, productInCart) {
    const product = productList.find((product) => {
      return product.id === parseInt(id);
    });

    // console.log(productList);
    // console.log(productInCart);

    return (
      <ProductInCart
        key={id}
        name={product.name}
        price={product.price * productInCart.quantity}
        image={product.image}
        value={productInCart.quantity}
        handleChange={() => console.log(products)}
        handleDecrease={() => decrease(id)}
        handleIncrease={() => increase(id)}
      />
    );
  }

  return (
    <S.Main>
      <S.Container>
        {/* where all products shows up, in leftblock */}
        <S.LeftBlock>
          {productList &&
            productList.map((product) => {
              return (
                <ProductBox
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              );
            })}
        </S.LeftBlock>
        {/* right block is for cart */}
        <S.RightBlock>
          <Cart>
            {Object.keys(products).map((id) => renderProduct(id, products[id]))}
          </Cart>
        </S.RightBlock>
      </S.Container>
      <Section background="white"></Section>
    </S.Main>
  );
}

export default Home;
