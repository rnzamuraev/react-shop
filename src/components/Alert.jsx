import { useEffect } from "react";

export function Alert(props) {
  const { name = "", closeAlert = Function.prototype } =
    props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div className="container">
      <div id="toast-container" className="container">
        <div className="toast">
          {name} товар добавлен в корзину
        </div>
      </div>
    </div>
  );
}
