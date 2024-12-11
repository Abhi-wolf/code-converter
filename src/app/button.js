import React from "react";
import { useConverter } from "./codeContext";
import toast from "react-hot-toast";

export default function Button() {
  const {
    language,
    targetLanguage,
    code,
    fetchCode,
    loading,
    handleConvertedCode,
  } = useConverter();

  const translateHandler = async (e) => {
    e.preventDefault();

    if (code.trim().length < 1) {
      toast.error("Please write some code before converting");
      return;
    }

    if (targetLanguage === "") {
      toast.error("Plese select a language to convert");
      return;
    }

    if (language === targetLanguage) {
      toast.error("Plese select different language to convert");
      return;
    }

    const result = await fetchCode(code, targetLanguage);

    const temp = result?.replace(/^```[\w]*\n/, "")?.replace(/```$/, "");
    if (temp) handleConvertedCode(temp);
  };

  return (
    <button
      disabled={loading}
      onClick={(e) => translateHandler(e)}
      className={`w-[140px] px-2 py-1 text-lg border-2 border-gray-200 bg-green-400 text-center rounded-lg hover:bg-green-500 transition ${
        loading ? "cursor-wait" : "cursor-pointer"
      }`}
    >
      {loading ? "Converting..." : "Convert"}
    </button>
  );
}
