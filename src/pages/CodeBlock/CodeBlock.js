import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import { socket } from "../../socket";
import { editCodeBlock } from "../../redux/reducers";
import { useDispatch, useSelector } from "react-redux";
import { CodeEditor } from "../../components/CodeEditor/CodeEditor";
import { useDebouncedCallback } from "use-debounce";

const CodeBlock = () => {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const { index } = useParams();

  const dispatch = useDispatch();
  const codeBlocks = useSelector((state) => state.codeBlocks);

  const codeBlock = codeBlocks[index];

  const debounceEdit = useDebouncedCallback((updatedValue) => {
    socket.emit("edit", codeBlock?.title, updatedValue, index);
    dispatch(editCodeBlock({ index, code: updatedValue }));
  }, 500);

  socket.on("not_first_user", () => {
    setIsReadOnly(false);
  });

  socket.on("edited", (updatedCode) => {
    dispatch(editCodeBlock({ index, code: updatedCode }));
  });

  useEffect(() => {
    socket.connect();
    socket.emit("join_room", index);

    return () => {
      socket.disconnect();
    };
  }, [index]);

  if (!codeBlock) {
    return null;
  }

  return (
    <div className="CodeBlockContainer">
      <h2>{codeBlock.title}</h2>
      <div className="codeContainer">
        <CodeEditor
          code={codeBlock.code}
          readOnly={isReadOnly}
          handleEdit={debounceEdit}
        />
      </div>
    </div>
  );
};

export default CodeBlock;
