export function Basket(props) {
  const {
    quantity = 0,
    handleShowBasket = Function.prototype,
  } = props;
  return (
    <a
      className="basket"
      href="#!git"
      onClick={handleShowBasket}
    >
      <i className="fab fa-shopify"></i>
      {quantity ? (
        <span className="basket__quantity">{quantity}</span>
      ) : null}
    </a>
  );
}
