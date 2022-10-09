export function BasketItem(props) {
  const {
    id,
    name,
    price,
    images,
    quantity,
    removeFromBasket = Function.prototype,
    incrementQuantity = Function.prototype,
    decrementQuantity = Function.prototype,
  } = props;
  return (
    <li className="collection-item basket-list__item">
      <div className="collection-item__img">
        <img src={images} alt="name" />
      </div>
      <h5>{name}</h5>
      <div className="collection-item__quantity">
        <h6 className=".mr-b-15">Количество</h6>
        {/* <span className="collection-item__plus">
          +
        </span>{" "} */}
        <i
          className="fas fa-minus collection-item__minus"
          onClick={() => decrementQuantity(id)}
        ></i>
        <b> {quantity} </b>
        <i
          className="fas fa-plus collection-item__plus"
          onClick={() => incrementQuantity(id)}
        ></i>{" "}
        {/* <span className="collection-item__minus">-</span> */}
      </div>
      <div className="collection-item__price">
        <h6 className=".mr-b-15">Стоимость</h6>
        {price * quantity} руб.
      </div>
      <i
        className="fas fa-trash-alt secondary-content basket-delete"
        onClick={() => removeFromBasket(id)}
      ></i>
    </li>
  );
}
