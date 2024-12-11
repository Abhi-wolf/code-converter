import React from "react";
import { useConverter } from "./codeContext";
import ReactCodeMirror from "@uiw/react-codemirror";

import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";

export default function OutputCode() {
  const { convertedCode, targetLanguage, loading } = useConverter();

  const getLang = () => {
    switch (targetLanguage) {
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
    <div className="w-full h-[50vh] md:h-[90vh] p-2 text-gray-800 rounded-lg border-2 border-gray-500 overflow-y-auto">
      <ReactCodeMirror
        value={convertedCode}
        extensions={getLang()}
        readOnly={true}
        className={`w-full min-h-full p-2 text-md md:text-lg border-none focus:outline-none overflow-y-auto bg-gray-100 `}
      />
    </div>
  );
}
