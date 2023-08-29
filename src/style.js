import { createGlobalStyle } from "styled-components";
import SfProDisplayReg from "./fonts/SF-Pro-Display-Regular.otf";
import SfProDisplayBold from "./fonts/SF-Pro-Display-Bold.otf";
import SfProDisplaySemiBold from "./fonts/SF-Pro-Display-Semibold.otf";
import SfProDisplayMedium from "./fonts/SF-Pro-Display-Medium.otf";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "SF Pro Display";
    src: url('${SfProDisplayBold}') format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "SF Pro Display";
    src: url('${SfProDisplaySemiBold}') format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "SF Pro Display";
    src: url('${SfProDisplayMedium}') format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "SF Pro Display";
    src: url('${SfProDisplayReg}') format("truetype");
    font-weight: 400;
    font-style: normal;
  }

* {
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    progress::-moz-progress-bar { background: red;
    border-radius:8px;
    height:8px;

    }
    progress::-webkit-progress-value { background: #005476;
      border-radius:8px;
      height:8px;


    }
    progress::-webkit-progress-bar {background-color: #EEEEEE; width: 100%;
    border-radius:8px;
    height:8px;
    }
    .recharts-surface{
      height:100%;
    }
    .recharts-wrapper{
      height:100% !important;
    }
    progress { color: #005476;
      border-radius:8px;

    }


}


// REFER RICH TEXT EDITOR COMPONENT
.public-DraftEditorPlaceholder-root{
  color: #BEBEBE;
  font: normal normal normal 14px/16px SF Pro Display;
  margin-top: 10px;
}

.anel-job-render-box-header d-flex{
  background-color:#E5E5E5;
}
//SEARCH ICON COLOR CHANGED
.ant-input-suffix{
  color:#8C8C8C;
}
.ant-select-selection-item{
 // margin-bottom:8px;
}


//FILTER STYLE CHANGED
.JobCandidatesView_filtersDiv__6Z9Nk {
  width: 106px;
  height: 34px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #E2E2E2;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.ant-notification-notice-message{
  font-weight: bold;
}
.ant-menu-inline-collapsed {
  width: 74px !important;
}
.MuiFormHelperText-contained{
  margin-left: 0 !important;
}
.DraftEditor-editorContainer{
  p{
    margin-bottom:0;
  }
  div{
    line-height:17px;
    white-space:none;
  }
}
.ant-alert-warning {
  background-color: #fffbe6;
  border: 1px solid #ffe58f;
  font-weight: 300;
  font-size: 12px;
  padding: 10px;
}
.rdw-editor-main{
  min-height:200px;
}
.recharts-layer recharts-label-list{
  display: none;
}
.recharts-responsive-container responsive-container{
  width: max-content;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ant-form-item-has-error .ant-input, .ant-form-item-has-error .ant-input-affix-wrapper, .ant-form-item-has-error .ant-input:hover, .ant-form-item-has-error .ant-input-affix-wrapper:hover {
  border-color: #ff4d4f !important;
}
.ant-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
}
.react-joyride__spotlight{
  width:84px;
}
body {
    border:${(props) => (props.border ? "1px solid #D8D8D8" : null)};
    border-radius:${(props) => (props.borderRadius ? "5px" : "0")};
}
div{
    border:${(props) => (props.border ? "1px solid #D8D8D8" : null)};
    border-radius:${(props) => (props.borderRadius ? "5px" : "0")};
}
.ant-switch-checked {
  background-color: rgb(66, 167, 21) !important;
}
.ant-select-selector {
  color: #000000 !important;
}
.ant-upload-list-item-info {
  height: 100%;
  padding: 0 4px;
  transition: background-color 0.3s;
  position: relative;
  top: 6px;
}
.rdw-editor-toolbar{
  display:flex;
  flex-wrap:wrap;
  >div{
    display:flex;
    flex-direction:row;
    margin:5px 5px;
    >div{
      margin:5px 5px;
    }
  }
}
.multiRoundDiv{
  justify-content:space-between;
  >div{
    width: 90%;
    justify-content: space-between;
    margin: auto;
  }
  .ant-input-affix-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 0px 11px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
    display: inline-flex;
    height: 32px;
  }

}
.a {
  opacity : 0 !important;
}
.ant-notification{
  z-index:1000000 !important;
}
`;
export default GlobalStyle;
