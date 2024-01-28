import React, { useState } from 'react'; // Import useState here
import { Notepad } from "./Notepad";
import { ConsoleBox } from "./Console"; // Adjust the import path as needed


export function Notepage() {
  const [output, setOutput] = useState(""); // State in the parent component

  const setOutputCallback = (newOutput) => {
    setOutput(newOutput);
  };

  return (
    <>
      <Notepad setOutputCallback={setOutputCallback} />
      <ConsoleBox output={output} />
    </>
  );
}


