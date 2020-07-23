import styled from 'styled-components';

export const Modal = styled.div`
    position: absolute;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`;

export const Content = styled.div`
    background-color: #fff;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
`;