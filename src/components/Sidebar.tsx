import React from "react";
import tw, { css } from "twin.macro";

const Row = tw.div`font-sans font-medium text-5xl italic last-of-type:mb-12`;
const Descrip = tw.div`font-sans text-4xl tracking-tight`;

const Name: React.FC = ({ children }) => {
  return (
    <div
      tw="font-sans font-bold uppercase mb-4 leading-none tracking-tight"
      css={css`
        font-size: 6rem;
      `}
    >
      {children}
    </div>
  );
};

const Sidebar = (): JSX.Element => {
  return (
    <div>
      <Name>
        Sean
        <br />
        Bailey
      </Name>
      <div>
        <Row>is a developer,</Row>
        <Row>teacher,</Row>
        <Row>data scientist,</Row>
        <Row>musician,</Row>
        <Row>and creative</Row>
        <Row>generalist.</Row>
      </div>
      <Descrip>This is their</Descrip>
      <Descrip>personal website.</Descrip>
      <Descrip>It is a work</Descrip>
      <Descrip>in progress.</Descrip>
    </div>
  );
};

export default Sidebar;
