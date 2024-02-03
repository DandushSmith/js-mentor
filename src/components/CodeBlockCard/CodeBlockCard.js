import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const CodeBlockCard = ({ index, title }) => {
  const navigate = useNavigate();

  return (
    <div
      className="code-block-card"
      onClick={() => navigate(`/codeBlock/${index}`)}
    >
      <h3 className="code-block-title">{title}</h3>
    </div>
  );
};

export default CodeBlockCard;
