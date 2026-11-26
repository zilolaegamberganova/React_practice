import { useState } from 'react';
import './Home.css'; 

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="home-card">
      <h1 className="home-title">Main Page</h1>
      <p className="count-text">
        Clicked: <span>{count}</span>
      </p>
      <div className="btn-group">
        <button className="btn-primary" onClick={() => setCount(count + 1)}>
          +1 Plus
        </button>
        <button className="btn-reset" onClick={() => setCount(0)}>
          Minus
        </button>
      </div>
    </div>
  );
}

export default Home;
