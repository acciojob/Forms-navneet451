import React from "react";

function Card({ children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", width: "300px", margin: "20px auto" }}>
      {children}
    </div>
  );
}

export default Card;
