import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./dependent/Preloader";
import { GoodsList } from "./dependent/Shop-List";

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <main className="container cont shop">
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} />
      )}
    </main>
  );
}
