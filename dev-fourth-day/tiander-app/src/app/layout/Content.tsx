import React, { ReactElement } from "react";
import Container from "react-bootstrap/Container";

type ContentProps = {
  children: ReactElement;
};

const Content = (props: ContentProps) => {
  return (
    <Container
      as="main"
      role="main"
      dir="row"
      style={{
        marginTop: "7.5rem",
        marginBottom: 10,
        flex: 1,
        flexGrow: 1,
        flexShrink: 1,
      }}
      {...props}
    >
      {props.children}
    </Container>
  );
};

export default Content;
