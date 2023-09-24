import React from "react";

function SideInfo({ title, description }) {
  return (
    <div>
      <div className="quick-card">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default SideInfo;
