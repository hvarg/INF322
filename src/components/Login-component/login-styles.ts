import {css } from 'lit-element';

export const customCss = css`
        :host {
                font: Sans-serif;
                --input-color: black;
                --input-font-family: sans-serif;
        }

        #main {
                display: grid;
                height: 100%;
                grid-template-columns:100%;
                grid-template-rows: 80px calc(100% - 160px) 80px;
        }

        wl-nav {
                background-color: #0d1e52;
                text-align: left;
                color: white;
                padding: 2%;
                grid-row: 1;
                grid-column: 1 / 3;
        }

        #content {
                grid-row: 2;
                grid-column: 1 / 3;
        }

        #footer {
                grid-column: 1 / 3;
                grid-row: 3;
                background-color: #faba25;
                align-content: center;
        }

        wl-textfield{
                color: black;
                --input-before-after-color: black;
                --input-color: black;
                margin-top: 10px;
        }
        
        wl-text{
                font-size: .9em;
        }
        
        wl-select{
                --input-before-after-color: black;
                --input-padding-top-bottom: 15px;
                --input-color: black;
                margin-top: 10px;
        }
        .special {
                box-shadow: 0 2px 2px rgba(0,0,0,.3);
                position: absolute; 
                top: 0; 
                right: 0; 
                bottom: 0; 
                padding: 0 1em; 
                pointer-events: none;
        }

        .card{
                width: 100%;
                height: 100%;
                border-radius: 6px;
                box-shadow: 0 2px 2px rgba(0,0,0,.3);
        }

        wl-button .btn-showPassword{
                background-color: #1a73e8;
                color: white;
        }

        a {
                color: #1a73e8;
                font-weight: bold;
                text-decoration: unset;
        }

        .column{
                flex:50%;
        }

        app-toolbar{
                display: flex;
                align-items:center;
                justify-content: center;
        }
        app-header {
                color: black;
                --app-header-background-rear-layer: {
                        /* The header is blue when condensed */
                        background-color: blue;
                };
        }  
    
        .row{
                display:flex;
                width:80% !important; 
                align-self:center;
        }
        .row-password{
                width:50% !important;
                align-self:center;
        }

        .login-button{
                display:flex;
                width:40% !important; 
                align-self:center;
        }
        
        .forgotPass{
                width: 80% !important;
                align-self:center;
                color: white;
        }

        .input-text{
                font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
                font-size: 14px;
                line-height: 1.42857143;
                color: #fff;
        }
        
        .card-container{
                width: 30%;
                height: 60%;
                position: absolute;
                background-color: white;
                display: inline-grid;
                margin: 20px;
                border-width: thin;
                border-style: solid;
                border-color: #eee;
                grid-template-columns: 100%;
                grid-template-rows: 16% 84%;
                left: 48%;
                top: 30%;
                transform: translate(-48%,-30%);
        }

        .submit-error.card-container{
                        height: 72%;
                }
        } 

        .column{
                flex: 100%;
        }
        
        .row{
                display:block;
        }
        
        .row-password{
                width:80% !important;
        }


  @media (min-width: 460px) {
        h2 {
          font-size: 36px;
        }
      }

      @media (max-width: 1350px){
                .card-container{
                        width: 35%;
                }
        }

        @media (max-width: 1200px){
                .card-container{
                        width: 40%;
                }
        }

        @media (max-width: 1100px){
                .card-container{
                        width: 43%;
                }
        }


      @media (max-width: 900px){
                .card-container{
                        width: calc(100% - 40%);
                }
      }


      @media (max-width: 700px){
        .card-container{
                width: calc(100% - 25%);
        }
}

  
`;
