import { BasketItem } from "./BasketItem";

export function BasketList(props) {
  const {
    order = [],
    handleShowBasket = Function.prototype,
    removeFromBasket = Function.prototype,
    incrementQuantity = Function.prototype,
    decrementQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price * elem.quantity;
  }, 0);

  return (
    <div className="container">
      <ul className="collection basket-list container">
        <span
          className="basket-close"
          onClick={handleShowBasket}
        >
          <i className="fa fa-times"></i>
        </span>
        <li className="collection-item active blue">
          <h4>Корзина</h4>
        </li>
        {order.length ? (
          order.map((item) => (
            <BasketItem
              key={item.id}
              removeFromBasket={removeFromBasket}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              {...item}
            />
          ))
        ) : (
          <li className="collection-item">Корзина пуста</li>
        )}

        <li className="collection-item basket-list__footer blue active">
          <h6>Общая стоимость: {totalPrice} руб.</h6>
          <button className="btn blue basket-list__btn">
            Оформить заказ
          </button>
        </li>
      </ul>
    </div>
  );
}
