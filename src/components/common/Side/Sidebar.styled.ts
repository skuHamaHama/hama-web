import styled from "styled-components";

export const SideBarWrap = styled.div`
z-index: 5;
padding: 12px;
background-color: #FFFFFF;
height: 100%;
width: 18%;
right: -55%;
top: 0;
position: fixed;
transition: 0.5s ease;
&.open {
  right: 0;
  transition: 0.5s ease;
}
`;

// export const