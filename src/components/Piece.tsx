import React from 'react';
import './Piece.css';

function Piece() {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', 'piece');
        const target = e.currentTarget;
        setTimeout(() => {
            target.classList.add('invisible');
        }, 0);
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.classList.remove('invisible');
    };

    return (
        <div
            className="piece"
            draggable={true}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        ></div>
    );
}

export default Piece;
