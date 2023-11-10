import React from "react";
import styled from "@emotion/styled";

type SectionProps = {
  alignContent: "center" | "space-evenly";
  height: "200px" | "100vh";
  children: React.ReactNode;
};

const StyledSection = styled.div<SectionProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: ${(props) => props.alignContent};
  height: ${(props) => props.height};
  margin: 0 20px;
  width: 100%;
`;

const Section = ({ alignContent, height, children }: SectionProps) => {
  return (
    <StyledSection alignContent={alignContent} height={height}>
      {children}
    </StyledSection>
  );
};

export default Section;
