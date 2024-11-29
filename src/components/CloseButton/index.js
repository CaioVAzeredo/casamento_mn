import styled from "styled-components";

const ContainerCloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .line1,
  .line2 {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: black; /* Substitua por uma cor visível */
    border-radius: 2px;
  }

  .line1 {
    transform: rotate(45deg);
  }

  .line2 {
    transform: rotate(-45deg);
  }
`;

function CloseButton({ onClick }) {
  return (
    <ContainerCloseButton onClick={onClick}>
      <div className="line1"></div>
      <div className="line2"></div>
    </ContainerCloseButton>
  );
}

export default CloseButton;
