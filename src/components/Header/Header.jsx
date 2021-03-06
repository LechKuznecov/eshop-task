import React, { useState, useContext } from "react";
import * as S from "./Header.style";
import barbora from "../../assets/barbora.jpg";
import { Link } from "react-router-dom";
import productList from "../../utils/products";
import { CartBox, SideBar, Cart, ProductInCart } from "../../components";
import { CartContext } from "../../contexts/cart.context";

function Header() {
  const [open, setOpen] = useState(false);
  const {
    products,
    increase,
    decrease,
    deleteProduct,
    totalAmount,
    setQuantity,
  } = useContext(CartContext);

  function renderProduct(id, productInCart) {
    const product = productList.find((product) => {
      return product.id === parseInt(id);
    });

    function changeInputValue(quantity) {
      setQuantity(quantity, id);
    }

    const price = (product.price * productInCart.quantity).toFixed(2);
    return (
      <ProductInCart
        key={id}
        name={product.name}
        price={price}
        image={product.image}
        value={productInCart.quantity}
        handleChange={(e) => changeInputValue(e.target.value)}
        handleDecrease={() => decrease(id)}
        handleIncrease={() => increase(id, product)}
        handleDelete={() => deleteProduct(id)}
      />
    );
  }
  return (
    <S.Header>
      <S.Container>
        <S.LeftBlock>
          <Link to="/">
            <S.Logo src={barbora} alt="logo" />
          </Link>
        </S.LeftBlock>
        <S.RightBlock className="mobile">
          <CartBox
            className="mobile"
            handleChange={() => setOpen(true)}
            total={totalAmount().toFixed(2)}
          />
        </S.RightBlock>
        <S.RightBlock className="fullscreen">
          <CartBox
            counter={Object.keys(products).length}
            total={totalAmount().toFixed(2)}
          />
        </S.RightBlock>
      </S.Container>
      <SideBar
        open={open}
        setOpen={setOpen}
        handleChange={() => setOpen(false)}
      >
        <Cart>
          {Object.keys(products).map((id) => renderProduct(id, products[id]))}
        </Cart>
      </SideBar>
    </S.Header>
  );
}

export default Header;
