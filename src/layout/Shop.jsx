import { Header } from "./Header";
import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "../components/Preloader";
import { GoodsList } from "../components/Goods-List";
// import { Basket } from "../components/Basket";
import { BasketList } from "../components/BasketList";
// import { Alert } from "../components/Alert";

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isShowBasket, setShowBasket] = useState(false);
  const [alertName, setAlertName] = useState("");

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.id === item.id
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromBasket = (id) => {
    const newOrder = order.filter((item) => item.id !== id);
    setOrder(newOrder);
  };

  const handleShowBasket = () => {
    setShowBasket(!isShowBasket);
  };

  const incrementQuantity = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        // const newQuantity = item.quantity + 1;
        return {
          ...item,
          // quantity: newQuantity,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const decrementQuantity = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity >= 1 ? newQuantity : 1,
          // quantity:
          //   item.quantity - 1 >= 1 ? item.quantity - 1 : 1,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  return (
    <>
      <Header
        handleShowBasket={handleShowBasket}
        quantity={order.length}
        alertName={alertName}
        closeAlert={closeAlert}
      />
      <main className="container shop">
        {isShowBasket && (
          <BasketList
            order={order}
            handleShowBasket={handleShowBasket}
            removeFromBasket={removeFromBasket}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        )}
        {/* <Basket quantity={order.length} /> */}
        {loading ? (
          <Preloader />
        ) : (
          <GoodsList
            goods={goods}
            addToBasket={addToBasket}
          />
        )}
      </main>
    </>
  );
}
