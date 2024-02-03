import Editor from "@monaco-editor/react";

export const CodeEditor = ({ code, readOnly, handleEdit }) => {
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
        onChange={handleEdit}
      />
    </div>
  );
};
