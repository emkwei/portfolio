import{s as n,j as o}from"./index-59dce2c2.js";const e=n.div`
  position: absolute;
  z-index: 100;
  top: calc(var(--padding) * 4);
  right: var(--padding);
  min-width: 55%;
  min-height: 70%;
  max-height: ${({short:r})=>r==="true"?"70%":"90%"};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  scroll-hidden {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer */
  }
`;function s({children:r,short:t=(!1).toString()}){return o.jsx(e,{short:t,children:r})}export{s as C};
