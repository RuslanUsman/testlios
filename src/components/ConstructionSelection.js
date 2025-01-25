import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ConstructionSelection.css';

function ConstructionSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedItem, selectedMaterial } = location.state;
  const [quantities, setQuantities] = useState({
    Дверь: 0,
    Стена: 0,
    Фундамент: 0,
    "Складная лестница": 0,
    "Решетка": 0,
    "Устройство отслеживания стрельбы": 0,
    "Установка с автоматической винтовкой": 0,
    "Автоматаическая установка для картечи": 0,
    "Торговый бот": 0,
    "Электромагнитная турель": 0,
    "Ракетная пусковая установка": 0
  });

  const handleQuantityChange = (item, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: Math.max(0, prevQuantities[item] + change),
    }));
  };

  const handleResult = () => {
    navigate('/result', { state: { selectedItem, selectedMaterial, quantities } });
  };

  const handleMainMenu = () => {
    navigate('/');
  };

  const items = {
    Дерево: [
      { name: 'Дверь', image: '/images/doorwood.png' },
      { name: 'Стена', image: '/images/wood.jpg' },
      { name: 'Фундамент', image: '/images/basewood.png' }
    ],
    Камень: [
      { name: 'Дверь', image: '/images/doorstone.png' },
      { name: 'Стена', image: '/images/stone.jpg' },
      { name: 'Фундамент', image: '/images/basestone.png' }
    ],
    Железо: [
      { name: 'Дверь', image: '/images/doormetall.png' },
      { name: 'Стена', image: '/images/metall.png' },
      { name: 'Фундамент', image: '/images/basemetall.png' },
      { name: 'Складная лестница', image: '/images/laddermetall.png' },
      { name: 'Решетка', image: '/images/grillmetall.png' }
    ],
    "Отличное железо": [
      { name: 'Дверь', image: '/images/doorsteal.png' },
      { name: 'Стена', image: '/images/wallsteal.png' },
      { name: 'Фундамент', image: '/images/basesteal.png' },
      { name: 'Складная лестница', image: '/images/laddersteal.png' },
      { name: 'Решетка', image: '/images/grillsteal.png' }
    ],
    Титан: [
      { name: 'Дверь', image: '/images/doortitanium.png' },
      { name: 'Стена', image: '/images/titanium.png' },
      { name: 'Фундамент', image: '/images/basetitanium.png' },
      { name: 'Складная лестница', image: '/images/laddertitanium.png' },
      { name: 'Решетка', image: '/images/grilltitanium.png' }
    ],
    Объекты: [
      { name: 'Устройство отслеживания стрельбы', image: '/images/toptyrel.png' },
      { name: 'Установка с автоматической винтовкой', image: '/images/middletyrel.png' },
      { name: 'Автоматаическая установка для картечи', image: '/images/shottyrel.png' },
      { name: 'Торговый бот', image: '/images/shopbot.png' },
      { name: 'Электромагнитная турель', image: '/images/tesla.png' },
      { name: 'Ракетная пусковая установка', image: '/images/rockettyrel.png' }
    ]
  };

  return (
    <div className="construction-selection">
      <h1>Выберите тип постройки и количество</h1>
      <div className="items-container">
        {items[selectedMaterial].map((item) => (
          <div key={item.name} className="item">
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.name, -1)}>-</button>
              <span>{quantities[item.name]}</span>
              <button onClick={() => handleQuantityChange(item.name, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleMainMenu}>Выбор взрывчатки</button>
        <button onClick={handleResult}>Результат</button>
      </div>
    </div>
  );
}

export default ConstructionSelection;

