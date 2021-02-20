// Assets
import underConstruction from "../../assets/warning.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function UnderConstruction() {
  return (
    <>
      <Container>
        <a
          href="https://www.flaticon.com/authors/wanicon"
          title="Warning SVG by Wanicon!"
        >
          <img
            src={underConstruction}
            alt="Under Construction"
            href="https://www.flaticon.com/authors/wanicon"
          />
        </a>
      </Container>
      <Container>
        <h4>Come back soon!</h4>
      </Container>
    </>
  );
}
