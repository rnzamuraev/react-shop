export function GoodsItem(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: {
      // regularPrice: oldPrice,
      finalPrice: price,
    },
    granted: [
      {
        images: { full_background: images },
      },
    ],
    addToBasket = Function.prototype,
  } = props;
  return (
    <div id={id} className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          className="activator"
          src={images}
          alt={name}
        />
      </div>
      <div className="card-content">
        <div>
          <span className="card-title activator grey-text text-darken-4">
            {name}
          </span>
          <p>{description}</p>
        </div>
        <div className="price">
          <span>{price} руб.</span>
          <button
            className="btn right blue"
            onClick={() => {
              addToBasket({ id, name, price, images });
            }}
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
