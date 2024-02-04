import Editor from "@monaco-editor/react";
import "./style.scss";

export const CodeEditor = ({ code, readOnly, handleEdit }) => {
  return (
    <div className="editorContainer">
      <Editor
        className="editor"
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
        onChange={handleEdit}
      />
    </div>
  );
};
