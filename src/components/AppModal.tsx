import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/variables';

interface Props {}

const AppModal: React.FC<Props> = (props) => {
  return (
    <Modal>
      <div className='modal-overlay'>
        <div className='modal-box'>
          <div className='modal-content'>{props.children}</div>
        </div>
      </div>
    </Modal>
  );
};

export default AppModal;

const Modal = styled.div`
  .modal-overlay {
    position: fixed;
    box-sizing: border-box;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(53, 53, 53, 0.288);
    z-index: 1000;
    opacity: 1;
    overflow-x: hidden;
    overflow-y: auto;
    .modal-box {
      position: relative;
      width: auto;
      margin: 10rem 0.5rem;
      pointer-events: none;
      @media (min-width: 576px) {
        max-width: 400px;
        margin: 4rem auto !important;
      }
      .modal-content {
        padding: 10px;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: ${colors.prl};
        background-clip: padding-box;
        border: none;
        border-radius: 0.3rem;
        box-shadow: 1px 1px 10px 0.5px rgba(0, 0, 0, 0.192);
        h2,
        h1 {
          padding: 15px 0;
        }
      }
    }
  }
`;
