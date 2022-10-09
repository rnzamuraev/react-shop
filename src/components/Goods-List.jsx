import { GoodsItem } from "./Goods-Item";

export function GoodsList(props) {
  const { goods = [], addToBasket = Function.prototype } = props;
  return (
    <div className="goods">
      {goods.length ? (
        goods.map((good) => {
          return (
            <GoodsItem
              key={good.mainId}
              {...good}
              addToBasket={addToBasket}
            />
          );
        })
      ) : (
        <h3>Nothing found</h3>
      )}
    </div>
  );
}
