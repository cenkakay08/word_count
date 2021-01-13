import React from "react";
import splitter from "../stringSplit";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { useState, useCallback } from "react";
import TableOfWords from "./TableOfWords";
import TextContent from "./TextContent";

const DropZone = () => {
  const [textItself, setTextItself] = useState("");
  const [textInfo, setTextInfo] = useState("");
  const [wordTable, setWordTable] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onloadend = () => {
        // Do whatever you want with the file contents
        const string = reader.result;
        setTextItself(string);
        console.log(string);
        console.log(textItself);
        var result = splitter(string);
        setTextInfo(splitter(string, "info"));
        console.log(result);
        setWordTable(result);
      };
      reader.readAsText(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <React.Fragment>
      <DivInput {...getRootProps()}>
        <input
          {...getInputProps()}
          type="file"
          id="file"
          className="input-file"
          accept=".txt"
        />
        <Droptext>Drag-drop the file here, or click to select file!</Droptext>
      </DivInput>
      <TextContent textItself={textItself} textInfo={textInfo} />
      <TableOfWords wordTable={wordTable} />
    </React.Fragment>
  );
};

const Droptext = styled.p`
  text-align: center;
  color: #0f3057;
  font-weight: bold;
  font-size: 4vw;
  width: 100%;
  line-height: 20vh;
`;
const DivInput = styled.div`
  height: 20vh;
  width: 90vw;
  flex: 1;
  align-items: center;
  left: 4vw;
  border-width: 10px;
  border-radius: 20px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  position: relative;
`;
export { DropZone };
