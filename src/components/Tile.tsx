import React from 'react';
import './Tile.css';

interface TileProps {
  children?: React.ReactNode;
  index: number;
}

function Tile({ children, index }: TileProps) {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (data === 'piece') {
      e.currentTarget.appendChild(document.querySelector('.piece') as HTMLElement);
    }
  };

  return (
    <div className="tile" onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
      {index}
    </div>
  );
}

export default Tile;
