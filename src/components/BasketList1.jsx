export function BasketList1(props) {
  const {
    id,
    name,
    newPrice,
    images,
    quantity,
    // isShowBasket,
    handleShowBasket = Function.prototype,
  } = props;
  return (
    <div className="overflow">
      <div key={id} className="container basket-list">
        <i
          className="fa fa-times close"
          onClick={handleShowBasket}
        ></i>

        <h3>Корзина</h3>
        <div className="basket-list__item">
          <div>
            <img src={images} alt={name} />
          </div>
          <div>
            {name}
            <span>Количество</span> 
          </div>
          <span>{quantity}</span> <span>{newPrice}</span>
          <i className="fas fa-trash-alt"></i>
        </div>
        <hr />
        <div>
          Общая стоимость:
          <span>{newPrice}</span>
        </div>
        <button className="btn">Оформить заказ</button>
      </div>
    </div>
  );
}
