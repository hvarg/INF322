import {css } from 'lit-element';

export const customCss = css`
:host {
  display: block;
  height: 100vh;
}

.page {
  display: none;
}

.page[active] {
  display: block;
}

#main {
    display: grid;
  height: 100%;
  grid-template-columns: 300px calc(100% - 300px);
  grid-template-rows: 100px calc(100% - 100px);
}

#header {
  grid-row: 1;
  grid-column: 1 / 3;
  border: 1px dotted red;
}

#nav-bar {
  grid-row: 2;
  grid-column: 1;
  border: 1px dotted blue;
}

#content {
  grid-row: 2;
  grid-column: 2;
  border: 1px dotted green;
}

#logInButton {
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 5px;
  background: aliceblue;
}

#logInButton:hover {
  background: aqua;
}

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
`;
