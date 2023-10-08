import { Outlet, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <div>Portal manu</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
          }}
        >
          <button onClick={() => navigate('/')}>go main</button>
          <button onClick={() => navigate('/test')}>go test</button>
          <button onClick={() => navigate('/legal')}>in microfront</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
