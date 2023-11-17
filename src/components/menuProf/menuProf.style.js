import { styled } from "styled-components";

export const dropdown = styled.div`
    position: relative;
    display: inline-block;
 `;
  
 export const dropdownContent = styled.div`
 display: flex;
 gap: 5px;
 background-color: #f9f9f9;
 min-width: 160px;
 opacity: 0;
 visibility: hidden;
 transform: translateY(-20px);
 transition: all .3s ease-in-out;
 position: absolute;
 z-index: 999;
 flex-direction: column;

    &.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
  `;
  
  
export const button = styled.button`
background: #FAFAFA;
border: none;
`;