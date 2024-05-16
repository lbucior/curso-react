import { Outlet } from "react-router-dom";
import Content from "./Content";
import Container from "react-bootstrap/Container";

// Background
// @ts-ignore
import imageBackground from "./../../assets/images/background-min.jpg";

const GuestLayout = () => {
  return (
    <Container
      dir="column"
      style={{
        flex: 1,
        flexShrink: 1,
        flexWrap: "wrap",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top",
        backgroundImage: imageBackground,
      }}
    >
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default GuestLayout;
