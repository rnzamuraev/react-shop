export function Header() {
  return (
    <header>
      <nav className="teal lighten-1">
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">
            React Shop
          </a>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down"
          >
            {/* <li>
              <a href="https://rnzamuraev.github.io/react-movies-project">
                Repo
              </a>
            </li> */}
            <li>
              <a href="#!">
                {/* <i className="fa fa-heart"></i> */}
                {/* <i className="fa fa-bag-shopping"></i> */}
                <i class="fab fa-shopify"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
