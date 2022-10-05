export function Footer() {
  return (
    <footer className="page-footer white">
      <div className="footer-copyright teal lighten-1">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://rnzamuraev.github.io/react-movies-project"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
