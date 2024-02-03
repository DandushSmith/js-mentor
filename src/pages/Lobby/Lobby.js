import React from "react";
import "./style.scss";
import CodeBlockCard from "../../components/CodeBlockCard/CodeBlockCard";
import { useSelector } from "react-redux";

const Lobby = () => {
  const codeBlocks = useSelector((state) => state.codeBlocks);

  return (
    <div className="container">
      <h1 className="title">Choose code block</h1>
      <div className="codeBlocks">
        {codeBlocks.map((codeBlock, index) => (
          <CodeBlockCard
            key={codeBlock._id}
            index={index}
            title={codeBlock.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Lobby;
