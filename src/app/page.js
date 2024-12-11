"use client";

import { ChevronDownIcon } from "lucide-react";
import CodePage from "./CodePage";
import { languages } from "@/utils";
import { useConverter } from "./codeContext";

export default function Home() {
  const {
    language,
    handleFromSetLanguage,
    convertToLanguage,
    handleTargetLanguage,
  } = useConverter();

  return (
    <main className="m-4 flex flex-col gap-4 ">
      <header className="bg-gray-300 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="relative">
            <select
              value={language}
              onChange={(e) => handleFromSetLanguage(e.target.value)}
              className="text-green-500 font-semibold appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">From Language</option>
              {languages.map((lang) => (
                <option
                  key={lang.value}
                  value={lang.value}
                  className="text-gray-400"
                >
                  {lang.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          <div className="hidden md:flex flex-col gap-1 ">
            <h1 className=" text-2xl font-bold text-center text-gray-800">
              Code Converter
            </h1>
            <p className="mt-[-10px] text-xs">
              (Convert code in one language to another)
            </p>
          </div>

          <div className="relative">
            <select
              value={convertToLanguage}
              onChange={(e) => handleTargetLanguage(e.target.value)}
              className="text-green-500 font-semibold appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">To Language</option>
              {languages.map((lang) => (
                <option
                  key={lang.value}
                  value={lang.value}
                  className="text-gray-400"
                >
                  {lang.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </header>
      <CodePage />
    </main>
  );
}
