export function GoodsItem(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: {
      // regularPrice: oldPrice,
      finalPrice: newPrice,
    },
    granted: [
      {
        images: { full_background: images },
      },
    ],
    // displayAssets: { background: img },
  } = props;
  return (
    <div id={id} class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src={images} alt={name} />
      </div>
      <div class="card-content">
        <div>
          <span class="card-title activator grey-text text-darken-4">
            {name}
          </span>
          <p>{description}</p>
        </div>
        <div className="price">
          <span>{newPrice} руб.</span>
          <button className="btn right">Купить</button>
        </div>
      </div>
    </div>
  );
}
