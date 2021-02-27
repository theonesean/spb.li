import React from "react";
import tw, { css } from "twin.macro";

const Row = tw.div`font-sans font-medium text-5xl italic last-of-type:mb-12`;
const Descrip = tw.div`font-sans font-bold text-4xl italic`;

const Name: React.FC = ({ children }) => {
  return (
    <div
      tw="font-sans font-black uppercase italic mt-16 mb-4 leading-none"
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
      <Name>Sean Bailey</Name>
      <div>
        <Row>is a developer,</Row>
        <Row>instructor,</Row>
        <Row>data scientist,</Row>
        <Row>musician,</Row>
        <Row>and creative</Row>
        <Row>generalist.</Row>
      </div>
      <Descrip>This is their personal website.</Descrip>
      <Descrip>It is a work in progress.</Descrip>
    </div>
  );
};

export default Sidebar;
