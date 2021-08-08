import '../../index.css';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper  ">
        <a href="#" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="repo">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
