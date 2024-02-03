import Editor from "@monaco-editor/react";
import { useState } from "react";

// TODO: check default value!
export const CodeEditor = ({ defaultCode, readOnly }) => {
  const [code, setCode] = useState(defaultCode);

  function handleOnChange(value) {
    setCode(value || "");
  }

  return (
    <div style={{ border: "1px solid red", height: "300px" }}>
      <Editor
        style={{ height: "300px" }}
        defaultLanguage="javascript"
        value={code}
        theme="vs-dark"
        options={{
          readOnly,
          fontSize: 14,
          minimap: {
            enabled: false,
          },
          contextmenu: false,
        }}
        onChange={handleOnChange}
      />
    </div>
  );
};
