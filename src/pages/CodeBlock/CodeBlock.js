import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import { socket } from "../../socket";
import { editCodeBlock } from "../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { CodeEditor } from "../../components/CodeEditor/CodeEditor";

const CodeBlock = () => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const { index } = useParams();
  const dispatch = useDispatch();
  const codeBlocks = useSelector((state) => state.codeBlocks);
  const data = codeBlocks[index];

  socket.on("not_first_user", () => {
    setIsReadOnly(false);
  });

  socket.on("edited", (updatedCode) => {
    dispatch(editCodeBlock({ index, code: updatedCode }));
  });

  const handleEdit = (updatedValue) => {
    dispatch(editCodeBlock({ index, code: updatedValue }));
    socket.emit("edit", data.title, updatedValue, index);
  };

  useEffect(() => {
    socket.connect();
    socket.emit("join_room", index);

    return () => {
      socket.disconnect();
    };
  }, [index]);

  if (!data) {
    // TODO: what to do here??
    return null;
  }

  return (
    <div className="CodeBlockContainer">
      <h2>{data.title}</h2>
      <div className="codeContainer">
        <CodeEditor
          code={data?.code}
          readOnly={isReadOnly}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default CodeBlock;
