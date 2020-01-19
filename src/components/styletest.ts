import {css } from 'lit-element';

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
    max-width: 50rem;

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
    }

    td {
        font-size: 0.8rem;
        font-weight: bold;
        line-height: 1.4;
        border-radius: 0.2rem;
        transition: opacity 0.3s ease;
    }

    td > span {
        font-size: 0.8em;
        font-weight: normal;
        display: block;
        width: 100%;
    }
}

.stage-earth {background-color: #FFA726};
.stage-mercury {background-color: #9CCC65};
.stage-venus {background-color: #FF8A65};
.stage-mars {background-color: #B3E5FC};
.stage-jupiter {background-color: #81D4FA};
.stage-saturn {background-color: #26C6DA};
`;
