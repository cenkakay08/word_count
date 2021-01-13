import React from "react";
import styled from "styled-components";
import { Table, Column, Cell } from "fixed-data-table-2";
import useWindowDimensions from "./GetScreenDimensions";
const TableOfWords = ({ wordTable }) => {
  const { height, width } = useWindowDimensions();
  return (
    <Tabblediv>
      <Table
        rowHeight={(height / 100) * 4}
        rowsCount={wordTable.length}
        headerHeight={(height / 100) * 4.5}
        width={(width / 100) * 18}
        height={(height / 100) * 55}
      >
        <Column
          columnKey="0"
          header={<Cell>Word</Cell>}
          align="center"
          width={(width / 100) * 12}
          cell={({ rowIndex, columnKey }) => {
            return <Cell>{wordTable[rowIndex][columnKey]}</Cell>;
          }}
        />
        <Column
          columnKey="1"
          header={<Cell>Times</Cell>}
          align="center"
          width={(width / 100) * 6}
          cell={({ rowIndex, columnKey }) => {
            return <Cell>{wordTable[rowIndex][columnKey]}</Cell>;
          }}
        />
      </Table>
    </Tabblediv>
  );
};

const Tabblediv = styled.div`
  height: 55vh;
  width: 18vw;
  top: 42vh;
  left: 40vw;
  background-color: #fafafa;
  position: absolute;
  overflow: hidden;
  border: 1px solid;
  box-shadow: 5px 10px 8px 10px #888888;
  font-size: 1.5vw;
  font-weight: bold;
`;

export default TableOfWords;
