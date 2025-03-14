import { useState } from "react";

export default function List({ list, width, height, itemHeight }) {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
  const visibleList = list.slice(indices[0], indices[1] + 1);
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const newStart = Math.floor(scrollTop / itemHeight);
    const newEnd = newStart + Math.floor(height / itemHeight);
    setIndices([newStart, newEnd]);
  };
  return (
    <div
      className="container"
      onScroll={handleScroll}
      style={{ height, width, background: "grey", overflow: "hidden" }}
    >
      <div style={{ height: list.length * itemHeight, position: "relative" }}>
        {visibleList.map((item, index) => {
          return (
            <div
              className="item"
              style={{
                height: itemHeight,
                background: "coral",
                borderTop: "5px solid grey",
                position: "absolute",
                top: (indices[0] + index) * itemHeight,
                width: "100%",
                textAlign: "center",
                color: "whitesmoke",
              }}
            >
              {"Item " + item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
