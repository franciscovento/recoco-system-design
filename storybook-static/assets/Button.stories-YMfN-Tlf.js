import{u as g,j as h}from"./styled-components.browser.esm-Clu1UH-V.js";import{t as r}from"./theme-DB_-j-9A.js";import"./index-BNmGZPJw.js";const n=e=>{switch(e){case"primary":return r.colors.primary;case"secondary":return r.colors.secondary;case"danger":return r.colors.danger;default:return r.colors.primary}},t=e=>({sm:{width:"142px",height:"30px","font-size":"12px","border-radius":"15px"},md:{width:"165px",height:"40px","font-size":"16px","border-radius":"20px"},lg:{width:"273px",height:"60px","font-size":"20px","border-radius":"30px"}})[e],f=g.button`
  max-width: 100%;
  background-color: ${e=>e.variant==="outlined"||e.variant==="text"?"transparent":n(e.color||"primary")};
  border: ${e=>e.variant==="outlined"?`1px solid ${n(e.color||"primary")}`:"1px solid transparent"};
  color: ${e=>e.variant==="filled"?r.colors.white:n(e.color||"primary")};
  ${e=>e.textColor?`color: ${e.textColor}`:""};
  display: inline-block;
  width: ${e=>t(e.size||"md").width};
  height: ${e=>t(e.size||"md").height};
  min-width: max-content;
  font-size: ${e=>t(e.size||"md")["font-size"]};
  border-radius: ${e=>e.rounded?t(e.size||"md")["border-radius"]:"0px"};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }
`,d=e=>{const{children:a,rounded:c,color:u,onClick:m,size:p,variant:y="filled",...x}=e;return h.jsx(f,{color:u,onClick:m,variant:y,size:p,rounded:c,...x,children:a})};d.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"outlined" | "filled" | "text"',elements:[{name:"literal",value:'"outlined"'},{name:"literal",value:'"filled"'},{name:"literal",value:'"text"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'}]},description:""},textColor:{required:!1,tsType:{name:"string"},description:""},rounded:{required:!0,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const b={title:"Atoms/Button",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:{type:"text"}},variant:{control:{type:"select"}},size:{control:{type:"select"}},color:{control:{type:"select"}},textColor:{control:{type:"color"}},rounded:{control:{type:"boolean"}},onClick:{action:"clicked"}}},o={args:{children:"Button",color:"primary",size:"md",variant:"filled",rounded:!1}};var i,l,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    color: 'primary',
    size: 'md',
    variant: 'filled',
    rounded: false
  }
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const $=["Playground"];export{o as Playground,$ as __namedExportsOrder,b as default};
