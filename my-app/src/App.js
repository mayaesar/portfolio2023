import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Device } from "./Devices";


const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <div className="image">

      </div>
      <div className="typing">
        
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  padding-top: 40px;
  .image{
    border: 1px solid black;
    height: 200px;
    width: 200px;
    margin: auto;
  }
`;

export default App;
