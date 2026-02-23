import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

const Home = () => {
  return (
      <header>
        <div className="logo">ToolMaster</div>
        <nav>
          <ul>
            <li><a href="/home">Teste</a></li>
            <li><a href="/profile">Teste</a></li>
          </ul>
        </nav>
        <div className="header-icon">
          <i className="bi bi-person"></i>
          <i className="bi bi-search"></i>
        </div>
      </header>
  );
};

export default Home;
