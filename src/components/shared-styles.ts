/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { css } from 'lit-element';

export const SharedStyles = css`

  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }

      #main {
        display: grid;
        height: 100%;
        grid-template-columns: 300px calc(100% - 300px);
        grid-template-rows: 80px calc(100% - 160px) 80px;
      }

      #header {
        background-color: #0d1e52;
        text-align: left;
        color: white;
        padding: 2%;
        grid-row: 1;
        grid-column: 1 / 3;
      }

      #nav-bar {
        grid-row: 2;
        grid-column: 1;
      }

      #content {
        grid-row: 2;
        grid-column: 2;
      }
      
      #footer {
      grid-column: 1 / 3;
      background-color: #faba25;
      align-content: center;
      }

      .centered {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      
      .component-margin {
        margin: 10% 10%
      }
`;
