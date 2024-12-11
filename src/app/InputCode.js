import React from "react";
import { useConverter } from "./codeContext";
import CodeMirror from "@uiw/react-codemirror";

import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";

export default function InputCode({ inputCode, handleInputChange }) {
  const { code, language, handleUserCode } = useConverter();

  const getLang = () => {
    switch (language) {
      case "cpp":
        return cpp();
      case "java":
        return java();
      case "rust":
        return rust();
      case "python":
        return python();
      case "javascript":
        return javascript();
      default:
        return cpp();
    }
  };

  return (
    <div className="w-full h-[50vh] md:h-[90vh]  p-2 text-gray-800 rounded-lg border-2 border-gray-500 overflow-y-auto">
      <CodeMirror
        value={code}
        onChange={handleUserCode}
        extensions={getLang()}
        className="w-full min-h-full p-2 text-md md:text-lg border-none focus:outline-none overflow-y-auto bg-gray-100"
      />
    </div>
  );
}
