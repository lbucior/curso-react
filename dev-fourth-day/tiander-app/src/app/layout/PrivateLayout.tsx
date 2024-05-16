import { Outlet } from "react-router-dom";
import Content from "./Content";
import Container from "react-bootstrap/Container";

// Background
// import imageBackground from "./../../assets/images/background-min.jpg";

const PrivateLayout = () => {
  return (
    <Container
      dir="column"
      style={{
        flex: 1,
        flexShrink: 1,
        flexWrap: "wrap",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "top",
        // backgroundImage: imageBackground,
      }}
    >
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};

export default PrivateLayout;
