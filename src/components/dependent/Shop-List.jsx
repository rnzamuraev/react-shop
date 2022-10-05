import { GoodsItem } from "./Shop-Item";

export function GoodsList(props) {
  const { goods = [] } = props;
  return (
    <div className="goods">
      {goods.length ? (
        goods.map((good) => {
          return <GoodsItem key={good.mainId} {...good} />;
        })
      ) : (
        <h3>Nothing found</h3>
      )}
    </div>
  );
}
