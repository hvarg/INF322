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

export const testCss = css`
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 100vh;
        padding: 4rem 0;
        font-family: -system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    }

    table {
        width: 100%;
        max-width: 40rem;

        tr:nth-child(even) th {
            color: #ccc;
            font-weight: normal;
        }

        th,
        td {
            padding: 0.5rem 1rem;
        }

        th {
            font-weight: normal;
            border-top: thin dotted #ccc;
            font-size: 0.8rem;
            line-height: 1.4;
            border-radius: 0.1rem;
            transition: opacity 0.3s ease;
        }

        td {
            font-size: 0.8rem;
            font-weight: bold;
            line-height: 1.4;
            border-radius: 0.1rem;
            transition: opacity 0.3s ease;
        }

        td > span {
            font-size: 0.8em;
            font-weight: normal;
            display: block;
            width: 100%;
            align: center;
        }
    }
    
    td {
            font-size: 0.8rem;
            font-weight: bold;
            line-height: 1.4;
            border-radius: 0.1rem;
            transition: opacity 0.3s ease;
            text-align: center;
    }


    
    .stage-earth {background-color: #FFA726};
    
    td > span {
           font-size: 0.8em;
           font-weight: normal;
           display: block;
           width: 100%;
    }
    
    th {
            font-weight: normal;
            border-top: thin dotted #005959;
            min-width: 45px;
            line-height: 1.4;
            border-radius: 0.1rem;
            transition: opacity 0.3s ease;
    }
    



    .stage-saturn {background-color: #f5f3ed};
    
    
    
    
    
    
    
    
    

`;
