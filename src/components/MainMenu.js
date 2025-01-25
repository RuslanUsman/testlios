import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';

function MainMenu() {
  const navigate = useNavigate();

  const handleSelection = (item) => {
    navigate('/materials', { state: { selectedItem: item } });
  };

  const items = [
    { name: 'Бобовка', image: '/images/bb.png' },
    { name: 'Динамит', image: '/images/tnt.png' },
    { name: 'Военная С4', image: '/images/c4.png' },
    { name: 'Гексоген', image: '/images/geks.png' },
    { name: 'Простая ракета', image: '/images/simplerocket.png' },
    { name: 'Ракета', image: '/images/rocket.png' },
    { name: 'Граната', image: '/images/granade.png' },
    { name: 'Граната из сплава', image: '/images/granadewith.png' },
    { name: 'Ракета РСЗО', image: '/images/rocketrszo.png' }
  ];

  return (
    <div className="main-menu">
      <h1>Выберите тип взрывчатки</h1>
      <div className="items-container">
        {items.map((item) => (
          <div key={item.name} className="item" onClick={() => handleSelection(item.name)}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainMenu;

