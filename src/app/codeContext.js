"use client";

import { model } from "@/libs";
import toast from "react-hot-toast";

const { createContext, useState, useContext } = require("react");

const CodeContext = createContext();

const CodeConverter = ({ children }) => {
  const [code, setCode] = useState("");
  const [convertedCode, setConvertedCode] = useState("");
  const [language, setLanguage] = useState("");
  const [targetLanguage, settargetLanguage] = useState("");
  const [loading, setIsloading] = useState(false);

  const handleFromSetLanguage = (lang) => {
    setLanguage(lang);
  };

  const handleTargetLanguage = (lang) => {
    settargetLanguage(lang);
  };

  const handleUserCode = (cd) => {
    setCode(cd);
  };

  const handleConvertedCode = (cd) => {
    setConvertedCode(cd);
  };

  const fetchCode = async (code, targetLanguage) => {
    try {
      setIsloading(true);

      const prompt = `Your are an intelligent code converter which converts code in one programming language to another programming language. Convert this code ${code} to ${targetLanguage} programming language, don't change the code's logic simply return the converted code`;

      const result = await model.generateContent(prompt);

      return result?.response?.text();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsloading(false);
    }
  };

  return (
    <CodeContext.Provider
      value={{
        code,
        loading,
        language,
        convertedCode,
        targetLanguage,
        fetchCode,
        handleUserCode,
        handleFromSetLanguage,
        handleConvertedCode,
        handleTargetLanguage,
      }}
    >
      {children}
    </CodeContext.Provider>
  );
};

export const useConverter = () => {
  const contextvalue = useContext(CodeContext);

  if (!contextvalue)
    throw new Error("Context is used outside the context boundary");

  return contextvalue;
};

export default CodeConverter;
