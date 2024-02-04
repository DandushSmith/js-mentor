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
  const [isShowSmiley, setIsShowSmiley] = useState(false);
  const { index } = useParams();

  const dispatch = useDispatch();
  const codeBlocks = useSelector((state) => state.codeBlocks);

  const codeBlock = codeBlocks[index];

  const isCodeMatchingSolution = (updatedValue) => {
    const codeLines = updatedValue.split("\n");
    const lastLine = codeLines[codeLines.length - 1].trim();
    const solution = codeBlock.solution.trim();
    return lastLine === solution;
  };

  const showSmiley = () => {
    setIsShowSmiley(true);
    setTimeout(() => {
      setIsShowSmiley(false);
    }, 5000);
  };

  const debounceEdit = useDebouncedCallback((updatedValue) => {
    socket.emit("edit", codeBlock?.title, updatedValue, index);
    if (isCodeMatchingSolution(updatedValue)) {
      showSmiley();
    }
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
      {isShowSmiley && <div className="smiley">😃</div>}
    </div>
  );
};

export default CodeBlock;
