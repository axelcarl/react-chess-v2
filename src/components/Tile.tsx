import React from "react";
import "./Tile.css";

interface TileProps {
  children?: React.ReactNode;
  index: number;
}

function Tile({ children, index }: TileProps) {
  const isColored = () => {
    return ((index - (index % 8)) / 8) % 2 === 0
      ? index % 2
        ? true
        : false
      : index % 2
      ? false
      : true;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (data === "piece") {
      e.currentTarget.appendChild(
        document.querySelector(".piece") as HTMLElement
      );
    }
  };

  return (
    <div
      className={isColored() ? "tile colored" : "tile"}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
}

export default Tile;
