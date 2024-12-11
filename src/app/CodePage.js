"use client";

import { useEffect } from "react";
import Button from "./button";
import InputCode from "./InputCode";
import OutputCode from "./OutputCode";
import hljs from "highlight.js";
import { languageArr } from "@/utils";
import { useConverter } from "./codeContext";

export default function CodePage({ setFromLanguage }) {
  const { code, handleFromSetLanguage } = useConverter();

  useEffect(() => {
    if (code.length > 0) {
      const output = hljs.highlightAuto(code, languageArr);
      handleFromSetLanguage(output.language);
    } else {
      console.log("NO INPUT CODE IS THERE");
    }
  }, [code]);

  return (
    <section className="flex flex-col md:flex-row gap-4 items-center justify-center">
      <InputCode />
      <Button />
      <OutputCode />
    </section>
  );
}
