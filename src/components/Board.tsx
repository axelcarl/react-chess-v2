import React from 'react';
import Tile from './Tile';
import Piece from './Piece';
import './Board.css';

const TILE_COUNT = 64;

function Board() {
  return (
    <div className='board'>
        {Array.from({ length: TILE_COUNT }, (_, index) => (
            <Tile index={index} key={index}>{index === 0 && <Piece />}</Tile>
        ))}
    </div>
  );
}

export default Board;
