import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MaterialSelection.css';

function MaterialSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedItem } = location.state;

  const handleSelection = (material) => {
    navigate('/construction', { state: { selectedItem, selectedMaterial: material } });
  };

  const materials = [
    { name: 'Дерево', image: '/images/wood.jpg' },
    { name: 'Камень', image: '/images/stone.jpg' },
    { name: 'Железо', image: '/images/metall.png' },
    { name: 'Отличное железо', image: '/images/steal.png' },
    { name: 'Титан', image: '/images/titanium.png' },
    { name: 'Объекты', image: '/images/object.png' }
  ];

  return (
    <div className="material-selection">
      <h1>Выбор материала</h1>
      <div className="items-container">
        {materials.map((material) => (
          <div key={material.name} className="item" onClick={() => handleSelection(material.name)}>
            <img src={material.image} alt={material.name} />
            <p>{material.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaterialSelection;


