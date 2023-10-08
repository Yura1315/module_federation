import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to='content'>content micro</Link>
      <Link to='content/single'>content single</Link>
    </div>
  );
};

export default Menu;
