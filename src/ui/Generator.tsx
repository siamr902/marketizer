import React, { useRef, useState } from "react";

const Generator = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string>("");
  const textRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = async () => {
    try {
      const res = await fetch("/api/idea-generation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const suggestion: { result: string } = await res.json();
      const { result } = suggestion;
      setSuggestion(result);
    } catch (error) {
      console.error(error);
    } finally {
        textRef.current!.value = suggestion.trim();
    }
  };
  return (
    <div className="min-h-[80vh] overflow-x-hidden flex items-center justify-center">
      <div className="w-fit flex flex-col space-y-3">
        <label htmlFor="generator" className="text-lg">
          Enter Your Ideas Here
        </label>
        <textarea
          name="generator"
          id="generator"
          className="h-80 md:w-[700px] lg:w-[52vw] xl:w-[700px] resize-none border border-black p-5"
          onChange={(e) => setQuery(e.target.value)}
          ref={textRef}
        />
        <button
          onClick={() => submitHandler()}
          className="p-4 text-xl bg-gray-200 w-full border"
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default Generator;
