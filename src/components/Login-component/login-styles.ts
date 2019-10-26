import {css } from 'lit-element';

export const customCss = css`
    :host {
        display: block;
        height: 100vh;
        font: Sans-serif;
        /*background: url(/images/valpo1.jpg) no-repeat;*/
        background-position: center;
        background-size: cover;
        --input-color: White;
    }
  
    .login-layout {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 95%;
    }
    footer{
      height:5%;
    }
    .card{
        background-color: #151617e0;
        border-radius: 6px;
        box-shadow: 0 2px 2px rgba(0,0,0,.3);
        height:100%;
        width:100%;
    }

    app-toolbar{
        display: flex;
        align-items:center;
        justify-content: center;
    }
    app-header {
        color: #fff;
        --app-header-background-rear-layer: {
          /* The header is blue when condensed */
          background-color: blue;
        };
    }  
    
    .column{
        flex:50%;
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
        width:50% !important; 
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
    
    @media screen and (max-width: 550px) {
        .card-container {
            height:60%;
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
    }

    @media screen and (max-width: 1600px) {
      .card-container{
        height: 40%;
        width: 40%;
        padding: 20px;
      }
      
  }
  
  
  @media screen and (max-width: 1100px) {
    .card-container{
      height: 50%;
      width: 90%;
      padding: 20px;
    }
    }
    wl-textfield{
    --input-before-after-color: #fff;	
    }
    wl-text{
        font-size: .9em;
    }
  wl-select {
    height: 100%;
    --select-height: 100%;
  }
  .special {
    color: #fff !important;
    background-color: #151617e0;
    box-shadow: 0 2px 2px rgba(0,0,0,.3);
    position: absolute; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    padding: 0 1em; 
    pointer-events: none;
  }
`;
