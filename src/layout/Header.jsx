import { Basket } from "../components/Basket";
import { Alert } from "../components/Alert";

export function Header(props) {
  const {
    quantity,
    handleShowBasket = Function.prototype,
    closeAlert = Function.prototype,
    alertName,
  } = props;

  return (
    <header className="header">
      <nav className="blue">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            React Shop
          </a>
          <Basket
            quantity={quantity}
            handleShowBasket={handleShowBasket}
          />
          {alertName && (
            <Alert
              name={alertName}
              closeAlert={closeAlert}
            />
          )}
        </div>
      </nav>
    </header>
  );
}
