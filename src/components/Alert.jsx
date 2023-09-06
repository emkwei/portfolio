import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  background-color: red;
  width: 400px;
  height: 500px;
  /* z-index: 100; */
`;

function Alert({ title, message }) {
  return (
    <Modal>
      <p>{title}</p>
      <p>{message}</p>
    </Modal>
  );
}

export default Alert;
